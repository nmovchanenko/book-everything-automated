var navBar = require('../../../pages/components/nav.tabs')(),
    flightsForm = require('../../../pages/components/flights.form')(),
    history = require('../../../pages/components/previous.searches')(),
    baseForm = require("../../../pages/components/base.form")(),
    utils = require("../../../test_data/data.utils.js")();

/**
 * 1. Open Flight form
 * 2. Pick any valid dates
 * 3. Fill out "from" and "to" fields with valid data
 * 4. click Search
 *
 * Expected Result: New record contains entered dates and "from"-"to" values
 */
describe("Flights: previous searches: new record " , function() {
    var startDate = new Date(),
        endDate = utils.getNextDay(startDate),
        cityFrom = "Moscow",
        cityTo = "London",
        expectedFlightRecord = utils.getValidFlightsRecord(startDate, endDate, cityFrom, cityTo),
        indexOfLastAddedRecord = -1,
        actualFlightRecord;

    it("should contain entered dates and 'from'-'to' values", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();

        actualFlightRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);

        expect(actualFlightRecord).toEqual(expectedFlightRecord);
    });
});