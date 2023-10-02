const Express_router = require("express").Router();
const { validate } = require("../Utils/Validator");
const validators = require("../Validators/User_Validators");
const controller = require("../Controllers/User_Controller");

// User ID - > Get
Express_router.get("/", controller.getNewUserID);

// Add Request - > Post
Express_router.post(
    "/requests",
    validate([
        validators.user_id("body"),
        validators.email("body"),
        ...validators.testVenueIDs("body"),
        validators.start_date("body"),
        validators.end_date("body"),
    ]),
    controller.addRequest
);

// Get Requests - > Get
Express_router.get(
    "/:user_id/requests",
    validate([validators.user_id("param")]),
    controller.getMyRequests
);

// Delete Request - > Delete
Express_router.delete(
    "/:user_id/requests/:request_id",
    validate([validators.user_id("param"), validators.request_id("param")]),
    controller.deleteRequest
);

module.exports = Express_router;
