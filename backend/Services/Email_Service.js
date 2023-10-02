const axios = require("axios");
const moment = require("moment");

const sendEmail = async (email, data) => {
    try {
        console.log("data: ", data);
        const textHTML = `
<h1>Found a test time for you!</h1>
The Centers are <b>"${data.venues.join(", ")}"</b>. <br>
The test time is between <b>${moment(data.start_date).format(
            "YYYY-MM-DD"
        )}</b> and  <b>${moment(data.end_date).format("YYYY-MM-DD")}</b>. <br>

If this was helpful, please consider donating to us to keep it running through <a href="https://buymeacoffee.com/bagheriali2001">Buy Me a Coffee</a> or <a href="https://zarinp.al/bagheriali2001">ZarinPal</a> or you can donate to this USDT address: <b>T9zsTLCF3XW9po3NHnJ1a3ob2YqsccEE8s</b> in TRC20 network.`;

        await axios({
            method: "POST",
            url: "https://api.mailersend.com/v1/email",
            headers: {
                Authorization: `Bearer ${process.env.MAILSENDER_API_TOKEN}`,
            },
            data: {
                from: {
                    email: "idp-crawl@bagheriali.dev",
                    name: "IDP Crawler",
                },
                to: [
                    {
                        email: email,
                        name: email,
                    },
                ],
                subject: "Found a test time for you!",
                html: textHTML,
            },
        });
    } catch (error) {
        console.log(error.body);
        throw error;
    }
};

module.exports.sendEmail = sendEmail;
