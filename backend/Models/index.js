const Mongoose = require("mongoose");

const db = () => {
    const m = {};

    const check_requests = require("./check_requests");
    m[check_requests.modelName] = check_requests;

    const email_log = require("./email_log");
    m[email_log.modelName] = email_log;

    const tests = require("./tests");
    m[tests.modelName] = tests;

    const tests_raw = require("./tests_raw");
    m[tests_raw.modelName] = tests_raw;

    const venues = require("./venues");
    m[venues.modelName] = venues;

    return m;
};

const models = db();
const mongoose = Mongoose;

module.exports = {
    mongoose,
    ...models,
};
