const cron = require("node-cron");
const {
    country_code,
    testCentreLocations,
    testModules,
    testFormatId,
} = require("../Config/API_ENUM");
const DataFetcher = require("./Data_Fetcher");
const moment = require("moment");
const db = require("../Models");
const { sendEmail } = require("./Email_Service");

class Cron_Jobs {
    countries = [95, 212, 220, 96, 13, 9];
    months_advance_steps_count = 2;
    months_to_advance_each_step = 2;

    constructor() {
        this.dataFetcher = new DataFetcher();

        // cron every day at 23:55 PM
        // cron.schedule("55 23 * * *", () => {
        cron.schedule("*/10 * * * *", () => {
            // cron.schedule("30 * * * * *", () => {
            this.fetchVenues();
        });

        // cron every 30 minutes
        cron.schedule("*/30 * * * *", () => {
            this.fetchTests();
        });

        // cron every hour 15 and 45 minutes
        // cron.schedule("15,45 * * * *", () => {
        cron.schedule("35 * * * * *", () => {
            this.fetchCheckRequest();
        });
    }

    convertDateMonthToCode(date) {
        const monthArray = [
            {
                month: "Jan",
                number: "01",
            },
            {
                month: "Feb",
                number: "02",
            },
            {
                month: "Mar",
                number: "03",
            },
            {
                month: "Apr",
                number: "04",
            },
            {
                month: "May",
                number: "05",
            },
            {
                month: "Jun",
                number: "06",
            },
            {
                month: "Jul",
                number: "07",
            },
            {
                month: "Aug",
                number: "08",
            },
            {
                month: "Sep",
                number: "09",
            },
            {
                month: "Oct",
                number: "10",
            },
            {
                month: "Nov",
                number: "11",
            },
            {
                month: "Dec",
                number: "12",
            },
        ];
        const dateArray = date.split("-");
        const monthCode = monthArray.find(
            month => month.month === dateArray[1]
        ).number;
        return `${dateArray[0]}-${monthCode}-${dateArray[2]}`;
    }

    async fetchVenues() {
        console.log("🚀", "fetching venues");
        for (let country of this.countries) {
            const displayNames =
                testCentreLocations.getUniqueDisplayNameOfCountry(country);

            for (let displayName of displayNames) {
                const testCenters =
                    testCentreLocations.getDisplayNameLocationIDs(displayName);

                for (let testModule of testModules.values) {
                    try {
                        const data = await this.dataFetcher.getVenues(
                            country,
                            testCenters || [],
                            testModule.values
                        );
                        if (data) {
                            for (let venue of data) {
                                const venueData = await db.venues.findOne({
                                    testVenueId: venue.testVenueId,
                                });
                                if (!venueData) {
                                    await db.venues.create({
                                        ...venue,
                                        customCityDisplayName: displayName,
                                    });
                                }
                            }
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }
        console.log("🚀 done updating venues");
    }

    async fetchTests() {
        console.log("🚀", "fetching tests");
        for (let country of this.countries) {
            let all_data = [];

            const venues = await db.venues.find({ countryId: country });

            let dates_list = [];
            const tomorrow = moment().add(1, "days");
            const endOfCurrentMonth = moment().endOf("month");
            if (tomorrow.isSame(endOfCurrentMonth, "day")) {
                dates_list.push({
                    start_date: tomorrow.format("YYYY-MM-DD"),
                    end_date: tomorrow.format("YYYY-MM-DD"),
                });
            } else if (tomorrow.isSame(endOfCurrentMonth, "month")) {
                dates_list.push({
                    start_date: tomorrow.format("YYYY-MM-DD"),
                    end_date: endOfCurrentMonth.format("YYYY-MM-DD"),
                });
            }
            for (let i = 1; i <= this.months_advance_steps_count; i++) {
                const start_date = moment()
                    .add(
                        (i - 1) * this.months_to_advance_each_step + 1,
                        "months"
                    )
                    .startOf("month");
                const end_date = moment()
                    .add(i * this.months_to_advance_each_step, "months")
                    .endOf("month");
                dates_list.push({
                    start_date: start_date.format("YYYY-MM-DD"),
                    end_date: end_date.format("YYYY-MM-DD"),
                });
            }

            for (let venue of venues) {
                for (let dates of dates_list) {
                    try {
                        console.log(
                            `🚀 ${venue.testVenueId} ${dates.start_date}`
                        );
                        const data = await this.dataFetcher.getTestSessions(
                            dates.start_date,
                            dates.end_date,
                            venue.testVenueId,
                            venue.testCentreId
                        );
                        if (data) {
                            let new_data = [];
                            for (let res_date of Object.keys(data)) {
                                for (let test of data[res_date]) {
                                    new_data.push({
                                        ...test,
                                        customDate:
                                            this.convertDateMonthToCode(
                                                res_date
                                            ),
                                        customVenueID:
                                            test.testSessionTestVenues
                                                .testVenueId ||
                                            venue.testVenueId,
                                    });
                                }
                            }
                            all_data = all_data.concat(new_data);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            }

            let all_data_processed = [];
            let all_data_raw = [];
            let testSessionIds = [];

            for (let data of all_data) {
                let index = all_data_processed.findIndex(
                    item => item.testSessionId === data.testSessionId
                );

                if (index === -1) {
                    all_data_processed.push({
                        testSessionId: data.testSessionId,
                        testSessionDate: data.testSessionDate,
                        customMainDate: moment(
                            data.testSessionDate.split("T")[0]
                        ),
                        testModuleId: data.testModuleId,
                        testFormatId: data.testFormatId,
                        volumeAvailable: data.volumeAvailable,
                        volumeAllocated: data.volumeAllocated,
                        testCentreLocationId: data.testCentreLocationId,
                        totalPublicTestsCount: data.totalPublicTestsCount,
                        unallocatedPublicTestsCount:
                            data.unallocatedPublicTestsCount,
                        isClosed: data.isClosed,
                        customVenueID: data.customVenueID,
                        seatsRemainingDisplayClass:
                            data.seatsRemainingDisplayClass, // 'availabilityLow', 'availabilityMedium', 'availabilityHigh'
                        seatsRemainingDisplayClass_Old:
                            data.seatsRemainingDisplayClass_Old,
                        bookByCandidateFrom: data.bookByCandidateFrom,
                        bookByCandidateTo: data.bookByCandidateTo,
                        testSessionJson: data.testSessionJson,
                        formattedTestFeeCurrency: data.formattedTestFeeCurrency,
                        computedTestFee: data.computedTestFee,
                    });
                    all_data_raw.push({
                        testSessionId: data.testSessionId,
                        customRawData: [data],
                    });
                } else {
                    if (
                        all_data_processed[
                            index
                        ].customAvailableSessionDates.includes(
                            data.testSessionDate
                        ) != -1
                    ) {
                        all_data_processed[
                            index
                        ].customAvailableSessionDates.push(
                            data.testSessionDate
                        );
                    }
                    if (
                        all_data_processed[
                            index
                        ].customAvailableModules.includes(data.testModuleId) !=
                        -1
                    ) {
                        all_data_processed[index].customAvailableModules.push(
                            data.testModuleId
                        );
                    }
                    if (
                        all_data_processed[
                            index
                        ].customAvailableFormats.includes(data.testFormatId) !=
                        -1
                    ) {
                        all_data_processed[index].customAvailableFormats.push(
                            data.testFormatId
                        );
                    }
                    all_data_raw[index].customRawData.push(data);
                }

                let testSessionIndex = testSessionIds.findIndex(
                    item => item === data.testSessionId
                );
                if (testSessionIndex === -1) {
                    testSessionIds.push(data.testSessionId);
                }
            }

            for (let data of all_data_processed) {
                await db.tests.findOneAndUpdate(
                    { testSessionId: data.testSessionId },
                    data,
                    { upsert: true }
                );
            }
            for (let data of all_data_raw) {
                await db.tests_raw.findOneAndUpdate(
                    { testSessionId: data.testSessionId },
                    data,
                    { upsert: true }
                );
            }
        }
        console.log("🚀 database updated");
    }

    async fetchCheckRequest() {
        try {
            console.log(`🚀 fetching check requests`);
            const requests = await db.check_requests.find({
                isFound: false,
                isDeleted: false,
            });

            if (requests.length === 0) return;
            // loop through all requests, and create a mongo query for each request
            // then, fetch the test sessions for each request
            const requestQueries = {
                $or: [],
            };
            for (let request of requests) {
                requestQueries.$or.push({
                    customVenueID: {
                        $in: request.testVenueIDs,
                    },
                    customMainDate: {
                        $gte: moment(request.start_date).startOf("day"),
                        $lte: moment(request.end_date).endOf("day"),
                    },
                });
            }
            console.log(`🚀 ${requests.length} fetched, fetching tests !!!`);
            const data = await db.tests.find(requestQueries);

            let emailList = [];

            for (let request of requests) {
                let isFound = false;
                for (let test of data) {
                    if (
                        request.testVenueIDs.includes(test.customVenueID) &&
                        moment(test.customMainDate).isBetween(
                            moment(request.start_date),
                            moment(request.end_date),
                            null,
                            "[]"
                        )
                    ) {
                        isFound = true;
                        break;
                    }
                }
                if (isFound) {
                    emailList.push({
                        email: request.email,
                        testVenueIDs: request.testVenueIDs,
                        start_date: request.start_date,
                        end_date: request.end_date,
                        request_id: request._id,
                    });
                }
            }

            // get list of testVenueIDs in emailList.*
            let testVenueIDs = [];
            for (let email of emailList) {
                testVenueIDs = testVenueIDs.concat(email.testVenueIDs);
            }
            testVenueIDs = [...new Set(testVenueIDs)];

            console.log(`🚀 fetching venues`);
            const venues = await db.venues
                .find({
                    testVenueId: {
                        $in: testVenueIDs,
                    },
                })
                .select("testVenueId testVenueName");

            for (let email of emailList) {
                email.venues = [];
                for (let venue_id of email.testVenueIDs) {
                    const venue = venues.find(
                        venue => venue.testVenueId === venue_id
                    );
                    if (venue) {
                        email.venues.push(venue.testVenueName);
                    }
                }
            }

            // send email to all requests
            // TODO: send email
            console.log(`🚀 sending ${emailList.length} emails`);

            for (let email of emailList) {
                await sendEmail(email.email, email);

                await db.check_requests.findOneAndUpdate(
                    {
                        _id: email.request_id,
                    },
                    {
                        isFound: true,
                    }
                );
            }
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = { Cron_Jobs };
