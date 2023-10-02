const { matchedData } = require("express-validator");
const { resMaker } = require("../Utils/Response");
const db = require("../Models");
const moment = require("moment");

const getVenueList = async function (req, res, next) {
    try {
        const { countryId, cityNames, testFormatIds } = matchedData(req, {
            locations: ["query"],
        });

        const venues = await db.venues.find({
            ...(countryId && { countryId }),
            ...(testFormatIds && { testFormatId: { $in: testFormatIds } }),
            ...(cityNames &&
                cityNames.length > 0 && {
                    customCityDisplayName: { $in: cityNames },
                }),
        });

        res.status(200).json(resMaker({ venues }, true));
        next();
    } catch (err) {
        next(err);
    }
};

const getTests = async function (req, res, next) {
    try {
        const { testVenueIds, start_date, end_date } = matchedData(req, {
            locations: ["query"],
        });

        console.log("sss", {
            testVenueId: { $in: testVenueIds },
            customMainDate: {
                $gte: moment(start_date).startOf("day"),
                $lte: moment(end_date).endOf("day"),
            },
        });
        const tests = await db.tests.find({
            customVenueID: { $in: testVenueIds },
            customMainDate: {
                $gte: moment(start_date).startOf("day"),
                $lte: moment(end_date).endOf("day"),
            },
        });

        res.status(200).json(resMaker({ tests }, true));
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getVenueList,
    getTests,
};
