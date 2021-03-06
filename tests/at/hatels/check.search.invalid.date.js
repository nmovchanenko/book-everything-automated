var navBar = require('../../../pages/components/nav.tabs')(),
    utils = require("../../../test_data/data.utils.js")(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Hotels form
 * 2. Set Start Date < End Date
 * 3. Click Search
 *
 * expected result: New record should no be added to the Previous searches
 */
describe("Hotels: previous searches:" , function() {

    var endDate = new Date(),
        startGreaterThanEnd = utils.getNextDay(endDate),
        location = "Helsinki";

    it("should not be possible to add new record if start date < end date", function() {
        browser.get("/");
        navBar.openHotels();

        baseForm.selectStartDate(startGreaterThanEnd);
        baseForm.selectEndDate(endDate);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});