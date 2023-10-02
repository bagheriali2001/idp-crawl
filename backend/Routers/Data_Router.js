const Express_router = require("express").Router();
const { validate } = require("../Utils/Validator");
const validators = require("../Validators/Data_Validators");
const controller = require("../Controllers/Data_Controller");

// Get Venue List - > Get
Express_router.get(
    "/venues",
    validate([
        validators.countryId("query"),
        ...validators.cityNames("query"),
        ...validators.testFormatIds("query"),
    ]),
    controller.getVenueList
);

// Get Tests - > Get
Express_router.get(
    "/tests",
    validate([
        ...validators.testVenueIds("query"),
        validators.start_date("query"),
        validators.end_date("query"),
    ]),
    controller.getTests
);

module.exports = Express_router;
