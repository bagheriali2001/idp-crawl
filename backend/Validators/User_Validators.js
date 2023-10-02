const { param, body, query } = require("express-validator");
const error_messages = require("../Config/Error_messages");
const db = require("../Models");
const { ClientError } = require("../Utils/Client_Error");
const moment = require("moment");

const validatorGenerator = function (type, field) {
    if (type === "body") {
        return body(field);
    } else if (type === "query") {
        return query(field);
    } else if (type === "param") {
        return param(field);
    }
};

const user_id = function (type) {
    let element = validatorGenerator(type, "user_id");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.user_id_required.message,
                error_messages.user_id_required.code
            )
        )
        .bail()
        .isString()
        .withMessage(
            new ClientError(
                error_messages.user_id_invalid.message,
                error_messages.user_id_invalid.code
            )
        );
};

const request_id = function (type) {
    let element = validatorGenerator(type, "request_id");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.request_id_required.message,
                error_messages.request_id_required.code
            )
        )
        .bail()
        .isMongoId()
        .withMessage(
            new ClientError(
                error_messages.request_id_invalid.message,
                error_messages.request_id_invalid.code
            )
        )
        .bail()
        .custom(async (value, { req }) => {
            const request = await db.check_requests.findOne({
                _id: value,
                user_id: req.params.user_id,
                isDeleted: false,
            });

            if (!request) {
                throw new ClientError(
                    error_messages.request_id_invalid.message,
                    error_messages.request_id_invalid.code
                );
            }

            return true;
        });
};

const email = function (type) {
    let element = validatorGenerator(type, "email");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.email_required.message,
                error_messages.email_required.code
            )
        )
        .bail()
        .isEmail()
        .withMessage(
            new ClientError(
                error_messages.email_invalid.message,
                error_messages.email_invalid.code
            )
        );
};

const testVenueIDs = function (type) {
    let el1 = validatorGenerator(type, "testVenueIDs");
    let el2 = validatorGenerator(type, "testVenueIDs.*");

    return [
        el1
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.test_venue_ids_required.message,
                    error_messages.test_venue_ids_required.code
                )
            )
            .bail()
            .isArray()
            .withMessage(
                new ClientError(
                    error_messages.test_venue_ids_invalid.message,
                    error_messages.test_venue_ids_invalid.code
                )
            ),
        el2
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.test_venue_id_required.message,
                    error_messages.test_venue_id_required.code
                )
            )
            .bail()
            .isString()
            .withMessage(
                new ClientError(
                    error_messages.test_venue_id_invalid.message,
                    error_messages.test_venue_id_invalid.code
                )
            )
            .bail()
            .custom(async value => {
                const testVenue = await db.venues.findOne({
                    testVenueId: value,
                });

                if (!testVenue) {
                    throw new ClientError(
                        error_messages.test_venue_id_invalid.message,
                        error_messages.test_venue_id_invalid.code
                    );
                }

                return true;
            }),
    ];
};

const start_date = function (type) {
    let element = validatorGenerator(type, "start_date");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.start_date_required.message,
                error_messages.start_date_required.code
            )
        )
        .bail()
        .isString()
        .withMessage(
            new ClientError(
                error_messages.start_date_invalid.message,
                error_messages.start_date_invalid.code
            )
        )
        .bail()
        .custom(value => {
            if (!moment(value, "YYYY-MM-DD", true).isValid()) {
                throw new ClientError(
                    error_messages.start_date_invalid.message,
                    error_messages.start_date_invalid.code
                );
            }

            return true;
        });
};

const end_date = function (type) {
    let element = validatorGenerator(type, "end_date");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.end_date_required.message,
                error_messages.end_date_required.code
            )
        )
        .bail()
        .isString()
        .withMessage(
            new ClientError(
                error_messages.end_date_invalid.message,
                error_messages.end_date_invalid.code
            )
        )
        .bail()
        .custom((value, { req }) => {
            if (!moment(value, "YYYY-MM-DD", true).isValid()) {
                throw new ClientError(
                    error_messages.end_date_invalid.message,
                    error_messages.end_date_invalid.code
                );
            } else if (
                moment(value, "YYYY-MM-DD").isBefore(
                    moment(req.query.start_date, "YYYY-MM-DD")
                )
            ) {
                throw new ClientError(
                    error_messages.end_date_invalid.message,
                    error_messages.end_date_invalid.code
                );
            }

            return true;
        });
};

module.exports = {
    user_id,
    request_id,
    email,
    testVenueIDs,
    start_date,
    end_date,
};
