var navBar = require('../../../pages/components/navigation')();
var flightsForm = require('../../../pages/components/flights.form')();
var history = require('../../../pages/components/history')();
var baseForm = require("../../../pages/components/base.form")();
var utils = require("../../../lib/data.utils")();

/**
 * 1. Open Flight form
 * 2. Pick any valid dates
 * 3. Fill out "from" and "to" fields
 * 4. click Search
 * 5. click Remove button in 'Previous searches' block
 *
 * expected result: result was removed from list
 */
describe("Flights: previous searches: " , function() {

    var startDate = new Date(),
        endDate = utils.getTomorrowDate(startDate),
        cityFrom = "Moscow",
        cityTo = "London",
        indexOfLastAddedRecord = -1;

    it("should be possible to remove history", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate.toISOString());
        baseForm.selectEndDate(endDate.toISOString());

        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();

        history.removeRecordByIndex(indexOfLastAddedRecord);
        expect(history.getListOfRecords().count()).toBe(0);
    });
});

