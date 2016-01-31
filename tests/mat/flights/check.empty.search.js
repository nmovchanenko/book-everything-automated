var navBar = require('../../../pages/components/nav.tabs')();
var baseForm = require("../../../pages/components/base.form")();
var utils = require("../../../test_data/data.utils.js")();
var history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Flight form
 * 2. Clear dates fields
 * 3. click search
 *
 * expected result: new record should not be added to the Previous searches
 */
describe("Flights: previous searches: " , function() {

    it("should not be possible to add new records with empty fields", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.clearStartDate();
        baseForm.clearEndDate();
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});