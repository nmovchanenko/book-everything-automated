var navBar = require('../../pages/components/navigation')();
var flightsForm = require('../../pages/components/flights.form')();
var history = require('../../pages/components/history')();
var baseForm = require("../../pages/components/base.form")();
var utils = require("../../lib/data.utils")();

/**
 * 1. Open Flight form
 * 2. Pick any valid dates
 * 3. Fill out "from" and "to" fileds
 * 4. click Search
 *
 * Expected Result: New record added to "Previous Searches" block
 */
describe("Flights form: " , function() {

    var startDate = new Date(),
        endDate = utils.getTomorrowDate(startDate),
        cityFrom = "Moscow",
        cityTo = "London",
        indexOfLastAddedRecord = -1,
        actualHistoryRecord;

    it("should be possible to add new search record to 'Previous Searches' block", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate.toISOString());
        baseForm.selectEndDate(endDate.toISOString());

        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();

        actualHistoryRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });
});