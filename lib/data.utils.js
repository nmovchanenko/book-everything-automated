var dataEnum = require("./data.enum");

var utils = function() {
    var locale = "en-us",
        monthOption = {
            month: 'long'
        },
        dayOption = {
            day: "numeric"
        },
        incorrectDateMessage = "Date was not found. Pass a valid Date object";

    return {
        getValidCarsRecord (startDate, endDate, location, carType){
            if (!startDate || !endDate) throw new Error(incorrectDateMessage);

            return startDate.toLocaleString(locale, monthOption) + " " +
                startDate.toLocaleString(locale, dayOption) + " - " +
                endDate.toLocaleString(locale, monthOption) + " " +
                endDate.toLocaleString(locale, dayOption) + ", " + location + " ? " + carType;
        },

        getValidFlightsRecord (startDate, endDate, cityFrom, cityTo){
            if (!startDate || !endDate) throw new Error(incorrectDateMessage);

            return startDate.toLocaleString(locale, monthOption) + " " +
                startDate.toLocaleString(locale, dayOption) + " - " +
                endDate.toLocaleString(locale, monthOption) + " " +
                endDate.toLocaleString(locale, dayOption) + ", " + cityFrom + " ✈ " + cityTo;
        },

        getValidHotelRecord (startDate, endDate, location, starsAmount) {
            if (!startDate || !endDate) throw new Error(incorrectDateMessage);

            return startDate.toLocaleString(locale, monthOption) + " " +
                startDate.toLocaleString(locale, dayOption) + " - " +
                endDate.toLocaleString(locale, monthOption) + " " +
                endDate.toLocaleString(locale, dayOption) + ", " + location + ", " + dataEnum.amenities.getStars(starsAmount);
        },

        getTomorrowDate (today) {
            if (!today) throw new Error(incorrectDateMessage);

            return new Date(today.getTime() + (24 * 60 * 60 * 1000));
        }

    };

};

module.exports = utils;