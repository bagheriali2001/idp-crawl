const axois = require("axios");

class DataFetcher {
    constructor() {
        this.venueSearchUrl =
            "https://ielts.idp.com/book/Json/FindAvailableTestVenuesForNewBooking";
        this.testSessionUrl =
            "https://ielts.idp.com/book/Json/FindAvailableTestSessionForNewBooking";
    }

    async fetch(url, body) {
        const response = await axois.post(url, body);
        // console.log(response);
        return response.data;
    }

    convertDate(date) {
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
        const monthText = monthArray.find(
            month => month.number === dateArray[1]
        ).month;
        return `${dateArray[0]}-${monthText}-${dateArray[2]}`;
    }

    async getVenues(countryId, testCentreLocations, testModules) {
        try {
            const body = {
                countryId: countryId,
                testCentreLocations: testCentreLocations,
                testModules: testModules,
                testCentreId: null,
                ieltCompliant: true,
            };

            return await this.fetch(this.venueSearchUrl, body);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTestSessions(
        testSessionFromDate,
        testSessionToDate,
        testVenueId,
        testCentreId
        // testModules,
        // testFormatId
    ) {
        try {
            const body = {
                testSessionFromDate: this.convertDate(testSessionFromDate),
                testSessionToDate: this.convertDate(testSessionToDate),
                testVenueId: testVenueId,
                testCentreId: testCentreId,
                // testModules: testModules,
                // testFormatId: testFormatId,
                specialNeedId: "",
                isSelt: false,
                token: null,
            };
            return await this.fetch(this.testSessionUrl, body);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = DataFetcher;

// // test
// const testFunction = async () => {
//     const dataFetcher = new DataFetcher();
//     const result = await dataFetcher.getVenues(
//         95,
//         [],
//         // [717, 2721, 3771, 2551, 2564, 3077, 1521, 1222, 71],
//         [1, 7]
//     );
//     console.log(result);

//     // console.log(dataFetcher.convertDate("2021-11-01"));

//     // const result = await dataFetcher.getTestSessions(
//     //     "2023-10-01",
//     //     "2023-11-30",
//     //     4827,
//     //     81,
//     //     [1, 7],
//     //     2
//     // );
//     // console.log(result["2023-Nov-25"][0].testSessionTestVenues);
// };

// testFunction();
