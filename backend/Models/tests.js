const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        // testSessionId: 730646,
        // speakingTestBookingsEnabled: true,
        // testSessionDate: '2023-11-25T10:00:00',
        // testModuleId: 7,
        // testFormatId: 2,
        // testSessionDescription: null,
        // locationDescription: 'Prime Education Services',
        // volumeAvailable: 8,
        // volumeAllocated: 0,
        // testCentreLocationId: 3482,
        // totalPublicTestsCount: 8,
        // unallocatedPublicTestsCount: 8,
        // sittingId: 1,
        // isClosed: null,
        // testCentre: [Object],
        // testCentreName: 'IDP IELTS Kuwait',
        // testCentreLocation: [Object],
        // testModule: null,
        // defaultTestApplicationFee: 0,
        // testSessionTestVenues: [Array],
        // seltSession: false,
        // testFee: null,
        // testCentreLocationFee: null,
        // seatsRemainingDisplayClass: 'availabilityHigh',
        // seatsRemainingDisplayClass_Old: 'availabilityHigh',
        // testCentreLocationTimeZone: 'Arab Standard Time',
        // bookByTestCentreFrom: null,
        // bookByTestCentreTo: null,
        // bookByBranchFrom: null,
        // bookByBranchTo: null,
        // bookByAgencyFrom: null,
        // bookByAgencyTo: null,
        // bookByCandidateFrom: '2023-08-28T00:00:00',
        // bookByCandidateTo: '2023-11-22T10:00:00',
        // testModuleGroupId: 1,
        // testSessionJson: '{"TestSessionId":730646,"TestSessionDate":"2023-11-25T10:00:00","TestModuleDescription":"AC or GT","TestModuleId":7,"TestFormatDescription":"computer-delivered","TestFormatId":2,"LocationDescription":"Prime Education Services","SpeakingTestBookingsEnabled":true}',
        // isSELTIELTS: false,
        // isSELT: false,
        // formattedTestFeeCurrency: '',
        // computedTestFee: 93

        testSessionId: { type: String, unique: true },
        testSessionDate: { type: String },
        customMainDate: { type: Date }, // time will be removed
        testModuleId: { type: String },
        testFormatId: { type: String },
        volumeAvailable: { type: String },
        volumeAllocated: { type: String },
        testCentreLocationId: { type: String },
        totalPublicTestsCount: { type: String },
        unallocatedPublicTestsCount: { type: String },
        isClosed: { type: String },
        customVenueID: { type: String }, //  = testSessionTestVenues.testVenueId
        seatsRemainingDisplayClass: { type: String }, // 'availabilityLow', 'availabilityMedium', 'availabilityHigh'
        seatsRemainingDisplayClass_Old: { type: String },
        bookByCandidateFrom: { type: String },
        bookByCandidateTo: { type: String },
        testSessionJson: { type: String },
        formattedTestFeeCurrency: { type: String },
        computedTestFee: { type: String },
    },
    { timestamps: true }
);

schema.index({
    customVenueID: 1,
    customMainDate: 1,
});

module.exports = model("tests", schema);
