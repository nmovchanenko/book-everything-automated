var navBar = require('../../pages/components/navigation')();
var flightsForm = require('../../pages/components/flights.form')();
var history = require('../../pages/components/history')();
var baseForm = require("../../pages/components/base.form")();

/**
 * 1. Open Flight form
 * 2. Pick any valid dates
 * 3. Fill out "from" and "to" fileds
 * 4. click Search
 *
 * Expected Result: New record added to "Previous Searches" block. Record contains entered dates and "from"-"to" values
 */
describe("Flights form" , function() {

    var startDate = new Date(),
        endDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000)),
        cityFrom = "Moscow",
        cityTo = "London";

    var locale = "en-us",
        monthOption = {
            month: 'long'
        },
        dayOption = {
            day: "numeric"
        };

    var expectedHistoryRecord =
        startDate.toLocaleString(locale, monthOption) + " " +
        startDate.toLocaleString(locale, dayOption) + " - " +
        endDate.toLocaleString(locale, monthOption) + " " +
        endDate.toLocaleString(locale, dayOption) + ", " + cityFrom + " ✈ " + cityTo;

    var actualHistoryRecord;

    it("Open Flight form", function() {
        browser.get("/");
        navBar.openFlights();
    });

    it("Pick any valid dates", function() {
        baseForm.selectStartDate(startDate.toISOString());
        baseForm.selectEndDate(endDate.toISOString());
    });

    it("Fill out 'from' and 'to' fileds", function() {
        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();
    });

    it("New record added to 'Previous Searches' block", function() {
        var indexOfLastAddedRecord = -1;
        actualHistoryRecord = history.getRecordByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });

    it("Record contains entered dates and 'from'-'to' values", function() {
        expect(actualHistoryRecord).toEqual(expectedHistoryRecord);
    });
});