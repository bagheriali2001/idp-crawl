const { matchedData } = require("express-validator");
const { resMaker } = require("../Utils/Response");
const db = require("../Models");
const error_messages = require("../Config/Error_messages");
const ULID = require("ulid");

const getNewUserID = async function (req, res, next) {
    try {
        const user_id = ULID.ulid();

        res.status(200).json(resMaker({ user_id }, true));
        next();
    } catch (err) {
        next(err);
    }
};

const addRequest = async function (req, res, next) {
    try {
        const { user_id, email, testVenueIDs, start_date, end_date } =
            matchedData(req, {
                locations: ["body"],
            });

        await db.check_requests.create({
            user_id: user_id,
            testVenueIDs: testVenueIDs,
            email: email,
            start_date: start_date,
            end_date: end_date,
        });

        res.status(200).json(resMaker(error_messages.task_complete, true));
        next();
    } catch (err) {
        next(err);
    }
};

const getMyRequests = async function (req, res, next) {
    try {
        const { user_id } = matchedData(req, { locations: ["params"] });

        const requests = await db.check_requests.find({
            user_id: user_id,
            isDeleted: false,
        });

        // create and array concat of all of requests.*.testVenueIDs
        let venue_ids = [];
        requests.forEach(request => {
            venue_ids = venue_ids.concat(request.testVenueIDs);
        });

        const venues = await db.venues
            .find({
                testVenueId: { $in: venue_ids },
            })
            .select("testVenueId testVenueName");

        requests.forEach(request => {
            request.testVenueIDs = request.testVenueIDs.map(venue_id => {
                const venue = venues.find(
                    venue => venue.testVenueId === venue_id
                );

                return {
                    venue_id: venue_id,
                    name: venue.testVenueName,
                };
            });
        });

        res.status(200).json(resMaker({ requests }, true));
        next();
    } catch (err) {
        next(err);
    }
};

const deleteRequest = async function (req, res, next) {
    try {
        const { user_id, request_id } = matchedData(req, {
            locations: ["params"],
        });

        await db.check_requests.findOneAndUpdate(
            {
                _id: request_id,
                user_id: user_id,
            },
            { isDeleted: true }
        );

        res.status(200).json(resMaker(error_messages.task_complete, true));
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getNewUserID,
    addRequest,
    getMyRequests,
    deleteRequest,
};
