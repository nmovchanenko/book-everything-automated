var dataEnum = require("./data.enum.js");

var utils = function() {
    var carSymbol = "\uD83D\uDE97",
        flightSymbol = "\u2708",
        defaultDate = new Date(),
        incorrectDateMessage = "Date was not found. Pass a valid Date object",
        monthStrings = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

    var numericYear = function (date) {
        return date.getFullYear().toString();
    };

    var numericMonth = function (date) {
        var mm = (date.getMonth() + 1).toString();
        return mm[1] ? mm : "0" + mm[0];
    };

    var numericDay = function (date) {
        var dd = date.getDate().toString();
        return dd[1] ? dd : "0" + dd[0];
    };

    var getCommonHistoryRecord = function (startDate, endDate) {
        if (!startDate || !endDate) throw new Error(incorrectDateMessage);
        // each history record uses pattern:
        // 'StartDate.Month.long' 'StartDate.Day.numeric' - 'EndDate.Month.long' 'EndDate.Day.numeric',
        // e.g.: January 31 - February 01,
        return monthStrings[startDate.getMonth()] + " " +
            numericDay(startDate) + " - " +
            monthStrings[endDate.getMonth()] + " " +
            numericDay(endDate) + ", ";
    };

    return {

        getValidCarsRecord (startDate, endDate, location, carType){
            return getCommonHistoryRecord(startDate, endDate) + location + " " + carSymbol + " " + carType;
        },

        getValidFlightsRecord (startDate, endDate, cityFrom, cityTo){
            return getCommonHistoryRecord(startDate, endDate) + cityFrom + " " + flightSymbol + " " + cityTo;
        },

        getValidHotelRecord (startDate, endDate, location, starsAmount) {
            return getCommonHistoryRecord(startDate, endDate) + location + ", " + dataEnum.amenities.getStars(starsAmount);
        },

        getNextDay (date) {
            if (!date) throw new Error(incorrectDateMessage);

            return new Date(date.getTime() + (24 * 60 * 60 * 1000));
        },

        getDate(){
            return defaultDate;
        },

        formatToYYYYMMDD(date){
            if (!date) throw new Error(incorrectDateMessage);
            // converting date to string YYYY-MM-DD (e.g. 2016-01-31)
            return numericYear(date) + "-" + numericMonth(date) + "-" + numericDay(date);
        }
    };
};

module.exports = utils;