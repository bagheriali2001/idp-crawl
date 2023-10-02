const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        user_id: { type: String, required: true },
        email: { type: String, required: true },
        testVenueIDs: { type: Array, required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        isFound: { type: Boolean, required: true, default: false },
        isDeleted: { type: Boolean, required: true, default: false },
    },
    { timestamps: true }
);

schema.index({
    testVenueIDS: 1,
    startDate: 1,
    endDate: 1,
});

module.exports = model("check_requests", schema);
