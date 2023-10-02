const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        testSessionId: { type: String, unique: true },
        customRawData: { type: Array }, //it has time too
    },
    { timestamps: true }
);

module.exports = model("tests_raw", schema);
