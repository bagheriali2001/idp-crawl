const { ClientError } = require("../Utils/Client_Error");
const error_messages = require("../Config/Error_messages");
const { validationResult } = require("express-validator");
const db = require("../Models");
const moment = require("moment");

const checkLimit = async (req, res, next) => {
    try {
        const { email, user_id } = req.body;

        const active_check_requests = await db.check_requests.find({
            // email: email,
            user_id: user_id,
            isFound: false,
            isDeleted: false,
        });

        if (active_check_requests.length >= 3) {
            throw new ClientError(
                error_messages.active_check_requests_limit_reached.message,
                error_messages.active_check_requests_limit_reached.code
            );
        }

        const total_non_deleted_added_last_month_check_requests =
            await db.check_requests.find({
                // email: email,
                user_id: user_id,
                isDeleted: false,
                createdAt: {
                    $gte: moment().subtract(1, "months").toDate(),
                },
            });

        if (total_non_deleted_added_last_month_check_requests.length >= 5) {
            throw new ClientError(
                error_messages.monthly_check_requests_limit_reached.message,
                error_messages.monthly_check_requests_limit_reached.code
            );
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports.checkLimit = checkLimit;
