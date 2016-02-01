var navBar = require('../../../pages/components/nav.tabs')(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Hotels form
 * 2. Clear dates fields
 * 3. click search
 *
 * expected result: new record should not be added to the Previous searches
 */
describe("Hotels: previous searches: " , function() {

    it("should not be possible to add new records with empty fields", function() {
        browser.get("/");
        navBar.openHotels();

        baseForm.clearStartDate();
        baseForm.clearEndDate();
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});