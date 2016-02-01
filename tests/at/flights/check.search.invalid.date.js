var navBar = require('../../../pages/components/nav.tabs')(),
    flightsForm = require('../../../pages/components/flights.form')(),
    utils = require("../../../test_data/data.utils.js")(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Flights form
 * 2. Set Start Date < End Date
 * 3. Click Search
 *
 * expected result: New record should not be added to the Previous searches
 */
describe("Flights: previous searches:" , function() {

    var endDate = new Date(),
        startDate = utils.getNextDay(endDate),
        cityFrom = "Oslo",
        cityTo = "Helsinki";

    it("should not be possible to add new record if start date < end date", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);
        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});