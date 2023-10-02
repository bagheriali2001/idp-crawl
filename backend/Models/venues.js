const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        countryId: { type: String },
        countryName: { type: String },
        testCentreId: { type: String },
        testFormatId: { type: String },
        testVenueId: { type: String },
        testVenueName: { type: String },
        seltCompliant: { type: Boolean },
        ieltCompliant: { type: Boolean },
        suburbOrTown: { type: String },
        testCentreName: { type: String },
        testVenueNote: { type: String },
        testCentrePhone: { type: String },
        testCentreEmail: { type: String },
        testVenueHtmlAddress: { type: String },
        latitude: { type: String },
        longitude: { type: String },
        mapsEnabled: { type: Boolean },
        staticMapUrl: { type: String },
        isOwnedByIDP: { type: Boolean },
        bxSearchEnabled: { type: Boolean },
        idpCode: { type: String },
        bxSearchRedirectEnabled: { type: Boolean },
        bxSearchRedirectUrl: { type: String },
        customCityDisplayName: { type: String },
    },
    { timestamps: true }
);

schema.index({
    countryId: 1,
});

module.exports = model("venues", schema);
