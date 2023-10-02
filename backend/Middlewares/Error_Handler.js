"use strict";
const httpStatus = require("http-status-codes");
const error_messages = require("../Config/Error_messages");

const errorHandler = function (error, req, res, next) {
    console.log(error);

    if (error.CLIENT_ERROR) {
        // const err_response = (typeof error.message === String) ? { message: error.message }:{ errors: error.message };
        let err_response;
        let is_client_error = true;
        if (
            typeof error.message === "string" ||
            typeof error.message === String
        ) {
            err_response = {
                errors: [
                    { message: error.message, special_code: error.CODES.spec },
                ],
            };
        } else {
            if (error.message[0].msg.CLIENT_ERROR) {
                err_response = {
                    errors: error.message.map(value => {
                        return {
                            message: value.msg.message,
                            special_code: value.msg.CODES.spec,
                        };
                    }),
                };
            } else {
                is_client_error = false;
            }
        }
        if (is_client_error) {
            let http_code = error.CODES.http;

            if (
                !(
                    typeof error.message === "string" ||
                    typeof error.message === String
                )
            ) {
                http_code = error.message[0].msg.CODES.http;
            }

            res.status(http_code).json({
                header: {
                    status_code: http_code,
                    status: httpStatus.getStatusText(http_code),
                },
                body: err_response,
            });
        } else {
            res.status(500).json({
                header: {
                    status_code: error_messages.server_error.code.http,
                    status: httpStatus.getStatusText(500),
                },
                body: {
                    errors: [
                        {
                            message: error_messages.server_error.message,
                            special_code: error_messages.server_error.code.spec,
                        },
                    ],
                },
            });
        }
    } else {
        res.status(500).json({
            header: {
                status_code: error_messages.server_error.code.http,
                status: httpStatus.getStatusText(500),
            },
            body: {
                errors: [
                    {
                        message: error_messages.server_error.message,
                        special_code: error_messages.server_error.code.spec,
                    },
                ],
            },
        });
    }
};

module.exports = errorHandler;
