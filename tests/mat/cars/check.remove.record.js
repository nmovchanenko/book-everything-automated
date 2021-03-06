var navBar = require('../../../pages/components/nav.tabs')(),
    history = require('../../../pages/components/previous.searches')(),
    baseForm = require("../../../pages/components/base.form")(),
    utils = require("../../../test_data/data.utils.js")();

/**
 * 1. Open Cars form
 * 2. Pick any valid dates
 * 3. Select any "Type" value
 * 4. Enter any "Location"
 * 5. click Search
 * 6. click remove button
 *
 * expected result: result was removed from list
 */
describe("Cars: previous searches: " , function() {
    var startDate = new Date(),
        endDate = utils.getNextDay(startDate),
        location = "Moscow",
        indexOfLastAddedRecord = -1;

    it("should be possible to remove search record", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        history.removeRecordByIndex(indexOfLastAddedRecord);
        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});