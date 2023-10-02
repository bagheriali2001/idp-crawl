const environments = require("dotenv").config({ path: `./.env` });

if (environments.error) {
    throw environments.error;
}

const dotenvExpand = require("dotenv-expand");
dotenvExpand.expand(environments);

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const Error_handler = require("./Middlewares/Error_Handler");
const morgan = require("./Middlewares/Morgan");
const mongooseConnect = require("./Database/mongoose");
const Main_router = require("./Routers/Main_Router");
const { Cron_Jobs } = require("./Services/Cron_Jobs");

const Port = process.env.API_PORT;
const Application = express();

Application.use(
    cors({
        origin: new RegExp(
            `^(http:\/\/|https:\/\/|http:\/\/localhost:3000|https:\/\/localhost:3000|http:\/\/${process.env.FRONT_END_DOMAIN}|https:\/\/${process.env.FRONT_END_DOMAIN})$`
        ),
    })
);
Application.use(express.json());
Application.use(express.urlencoded({ extended: false }));

Application.use(helmet.hidePoweredBy());
Application.use(morgan);
Application.use("/api/", Main_router);

Application.use(Error_handler);

// start cron jobs
const cron_jobs = new Cron_Jobs();

mongooseConnect()
    .then(async () => {
        Application.listen(Port, () => {
            console.log(`API Running on port ${Port}`);
        });
    })
    .catch(error => console.log(error));
