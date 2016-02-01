var navBar = require('../../../pages/components/nav.tabs')(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Cars form
 * 2. Clear dates fields
 * 3. Click Search
 *
 * expected result: validation message appeared
 */
describe("Cars: previous searches: " , function() {

    it("should not be possible to add new records with empty fields", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.clearStartDate();
        baseForm.clearEndDate();
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});