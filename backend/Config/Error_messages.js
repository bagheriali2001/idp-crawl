module.exports = {
    task_complete: {
        message: "Task completed successfully.",
        code: { http: 200, spec: 0 },
    },
    server_error: {
        message: "Server error.",
        code: { http: 500, spec: 1 },
    },

    user_id_required: {
        message: "User id is required.",
        code: { http: 400, spec: 1 },
    },
    user_id_invalid: {
        message: "User id is invalid.",
        code: { http: 400, spec: 2 },
    },
    request_id_required: {
        message: "Request id is required.",
        code: { http: 400, spec: 3 },
    },
    request_id_invalid: {
        message: "Request id is invalid.",
        code: { http: 400, spec: 4 },
    },
    email_required: {
        message: "Email is required.",
        code: { http: 400, spec: 5 },
    },
    email_invalid: {
        message: "Email is invalid.",
        code: { http: 400, spec: 6 },
    },
    test_venue_ids_required: {
        message: "Test venue ids are required.",
        code: { http: 400, spec: 7 },
    },
    test_venue_ids_invalid: {
        message: "Test venue ids are invalid.",
        code: { http: 400, spec: 8 },
    },
    test_venue_id_required: {
        message: "Test venue id is required.",
        code: { http: 400, spec: 9 },
    },
    test_venue_id_invalid: {
        message: "Test venue id is invalid.",
        code: { http: 400, spec: 10 },
    },
    country_id_required: {
        message: "Country id is required.",
        code: { http: 400, spec: 11 },
    },
    country_id_invalid: {
        message: "Country id is invalid.",
        code: { http: 400, spec: 12 },
    },
    city_names_required: {
        message: "City names are required.",
        code: { http: 400, spec: 13 },
    },
    city_names_invalid: {
        message: "City names are invalid.",
        code: { http: 400, spec: 14 },
    },
    city_name_required: {
        message: "City name is required.",
        code: { http: 400, spec: 15 },
    },
    city_name_invalid: {
        message: "City name is invalid.",
        code: { http: 400, spec: 16 },
    },
    test_format_ids_required: {
        message: "Test format ids are required.",
        code: { http: 400, spec: 17 },
    },
    test_format_ids_invalid: {
        message: "Test format ids are invalid.",
        code: { http: 400, spec: 18 },
    },
    test_format_id_required: {
        message: "Test format id is required.",
        code: { http: 400, spec: 19 },
    },
    test_format_id_invalid: {
        message: "Test format id is invalid.",
        code: { http: 400, spec: 20 },
    },
    start_date_required: {
        message: "Start date is required.",
        code: { http: 400, spec: 21 },
    },
    start_date_invalid: {
        message: "Start date is invalid.",
        code: { http: 400, spec: 22 },
    },
    end_date_required: {
        message: "End date is required.",
        code: { http: 400, spec: 23 },
    },
    end_date_invalid: {
        message: "End date is invalid.",
        code: { http: 400, spec: 24 },
    },
};
