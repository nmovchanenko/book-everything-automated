var navBar = require('../../../pages/components/nav.tabs')(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Cars form
 * 2. Type invalid value to 'Location'
 * 3. Click Search
 *
 * expected result: New record should no be added to the Previous searches
 */
describe("Cars: previous searches:", function() {

    var invalidValue = "!@#$%123456qwerty";

    it("should not be possible to add new record with invalid 'Location' values", function() {

        // Each test function return a promise, so we can chain them.
        // This test-case is just an example of chaining functions with protractor
        browser
            .get("/")
            .then(navBar.openCars())
            .then(baseForm.fillLocation(invalidValue))
            .then(baseForm.clickSearch());

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});