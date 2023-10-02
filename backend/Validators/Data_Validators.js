const { param, body, query } = require("express-validator");
const error_messages = require("../Config/Error_messages");
const db = require("../Models");
const { ClientError } = require("../Utils/Client_Error");
const {
    country_code,
    testCentreLocations,
    testFormatId,
} = require("../Config/API_ENUM");
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

const countryId = function (type) {
    let element = validatorGenerator(type, "countryId");

    return element
        .exists()
        .withMessage(
            new ClientError(
                error_messages.country_id_required.message,
                error_messages.country_id_required.code
            )
        )
        .bail()
        .isString()
        .withMessage(
            new ClientError(
                error_messages.country_id_invalid.message,
                error_messages.country_id_invalid.code
            )
        )
        .bail()
        .custom(value => {
            if (!country_code.checkCountryCode(value)) {
                throw new ClientError(
                    error_messages.country_id_invalid.message,
                    error_messages.country_id_invalid.code
                );
            }

            return true;
        });
};

const cityNames = function (type) {
    let el1 = validatorGenerator(type, "cityNames");
    let el2 = validatorGenerator(type, "cityNames.*");

    return [
        el1
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.city_names_required.message,
                    error_messages.city_names_required.code
                )
            )
            .bail()
            .isArray()
            .withMessage(
                new ClientError(
                    error_messages.city_names_invalid.message,
                    error_messages.city_names_invalid.code
                )
            ),
        el2
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.city_name_required.message,
                    error_messages.city_name_required.code
                )
            )
            .bail()
            .isString()
            .withMessage(
                new ClientError(
                    error_messages.city_name_invalid.message,
                    error_messages.city_name_invalid.code
                )
            )
            .bail()
            .custom(async value => {
                const city =
                    testCentreLocations.checkIfDisplayNameExists(value);

                if (!city) {
                    throw new ClientError(
                        error_messages.city_name_invalid.message,
                        error_messages.city_name_invalid.code
                    );
                }

                return true;
            }),
    ];
};

const testFormatIds = function (type) {
    let el1 = validatorGenerator(type, "testFormatIds");
    let el2 = validatorGenerator(type, "testFormatIds.*");

    return [
        el1
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.test_format_ids_required.message,
                    error_messages.test_format_ids_required.code
                )
            )
            .bail()
            .isArray()
            .withMessage(
                new ClientError(
                    error_messages.test_format_ids_invalid.message,
                    error_messages.test_format_ids_invalid.code
                )
            ),
        el2
            .exists()
            .withMessage(
                new ClientError(
                    error_messages.test_format_id_required.message,
                    error_messages.test_format_id_required.code
                )
            )
            .bail()
            .isString()
            .withMessage(
                new ClientError(
                    error_messages.test_format_id_invalid.message,
                    error_messages.test_format_id_invalid.code
                )
            )
            .bail()
            .isIn(testFormatId.getAllValues())
            .withMessage(
                new ClientError(
                    error_messages.test_format_id_invalid.message,
                    error_messages.test_format_id_invalid.code
                )
            ),
    ];
};

const testVenueIds = function (type) {
    let el1 = validatorGenerator(type, "testVenueIds");
    let el2 = validatorGenerator(type, "testVenueIds.*");

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
                const request = await db.venues.findOne({
                    testVenueId: value,
                });

                if (!request) {
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
    countryId,
    cityNames,
    testFormatIds,
    testVenueIds,
    start_date,
    end_date,
};
