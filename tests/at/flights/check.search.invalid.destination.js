var navBar = require('../../../pages/components/nav.tabs')(),
    flightsForm = require('../../../pages/components/flights.form')(),
    baseForm = require("../../../pages/components/base.form")(),
    history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Flights form
 * 2. Type invalid values into 'From' and 'To'
 * 3. Click Search
 *
 * expected result: New record should no be added to the Previous searches
 */
describe("Flights: previous searches:", function() {

    var invalidValue = "qwerty!@#$%123456";

    it("should not be possible to add new record with invalid 'From' and 'To' values", function() {

        // Each test function return a promise, so we can chain them.
        // This test-case is just an example of chaining functions with protractor
        browser
            .get("/")
            .then(navBar.openFlights())
            .then(flightsForm.fillFrom(invalidValue))
            .then(flightsForm.fillTo(invalidValue))
            .then(baseForm.clickSearch());

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});