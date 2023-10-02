const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        user_id: { type: String, required: true },
        email: { type: String, required: true },
        testVenueID: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
    },
    { timestamps: true }
);

schema.index({
    email: 1,
});

module.exports = model("email_log", schema);
