const morgan = require("morgan");
const moment = require("moment");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const cron = require("node-cron");

const logDirectory = process.env.API_LOG_DIRECTORY || "./logs";

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = require("file-stream-rotator").getStream({
    date_format: "YYYYMMDD",
    filename: path.join(logDirectory, "access_log-%DATE%.log"),
    frequency: "daily",
    verbose: false,
});

const morganMiddleware = morgan(
    function (tokens, req, res) {
        const result = [
            moment(tokens.date(req, res)).format("YYYY-MM-DD HH:mm:ss"),
            tokens.method(req, res),
            tokens.url(req, res),
            `UA: ${tokens["user-agent"](req, res)}`,
            tokens.status(req, res),
            `${tokens["response-time"](req, res)} ms`,
        ];

        try {
            let decoded = jwt.verify(
                req.headers.authtoken,
                process.env.API_JWT_SECRET
            );
            if (decoded) {
                result.push(`user : ${decoded.username}`);
            } else {
                result.push(`user : Unknown`);
            }
        } catch (error) {
            result.push(`user : Unknown`);
        }

        return result.join(", ");
    },
    { stream: accessLogStream }
);

const clearOldLogs = function (days_to_keep) {
    const files = fs.readdirSync(logDirectory);
    const today = moment().format("YYYY-MM-DD");
    files.forEach(file => {
        if (file.indexOf("access_log-") === 0) {
            const date = file.split("-")[1].split(".")[0];
            if (moment(today).diff(moment(date), "days") > days_to_keep) {
                try {
                    fs.unlinkSync(path.join(logDirectory, file));
                } catch (error) {
                    console.log("del error: ", error);
                }
            }
        }
    });
};

cron.schedule("0 59 23 * * *", () => {
    clearOldLogs(60);
});

module.exports = morganMiddleware;
