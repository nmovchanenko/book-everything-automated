var navBar = require('../../../pages/components/nav.tabs')(),
    flightsForm = require('../../../pages/components/flights.form')(),
    history = require('../../../pages/components/previous.searches')(),
    baseForm = require("../../../pages/components/base.form")(),
    utils = require("../../../test_data/data.utils.js")();

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
        endDate = utils.getNextDay(startDate),
        cityFrom = "Moscow",
        cityTo = "London",
        indexOfLastAddedRecord = -1;

    it("should be possible to remove search record", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();

        history.removeRecordByIndex(indexOfLastAddedRecord);
        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});

