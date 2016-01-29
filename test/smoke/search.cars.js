var navBar = require('../../pages/components/navigation')();
var carsForm = require('../../pages/components/cars.form')();
var history = require('../../pages/components/history')();
var baseForm = require("../../pages/components/base.form")();

/**
 * 1. Open Cars form
 * 2. Pick any valid dates
 * 3. Select any "Type" value
 * 4. Enter any "Location"
 * 5. click Search
 *
 * Expected: New record added to "Previous Searches" block. Record contains entered dates, "Type" and "Location" values
 */
describe("Cars form" , function() {

    var startDate = new Date(),
        endDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000)),
        location = "Berlin",
        type = "Reasonable";

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
        endDate.toLocaleString(locale, dayOption) + ", " + location + " ? " + type;

    var actualHistoryRecord;

    it("Open Cars form", function() {
        browser.get("/");
        navBar.openCars();
    });

    it("Pick any valid dates", function() {
        baseForm.selectStartDate(startDate.toISOString());
        baseForm.selectEndDate(endDate.toISOString());
    });

    it("Select any 'Type' value and enter any 'Location'", function() {

        baseForm.clickSearch();
    });

    it("New record added to the 'Previous Searches' block", function() {
        var indexOfLastAddedRecord = -1;
        actualHistoryRecord = history.getRecordByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });

    it("Record contains entered dates, 'Type' and 'Location' values", function() {
        expect(actualHistoryRecord).toEqual(expectedHistoryRecord);
    });
});