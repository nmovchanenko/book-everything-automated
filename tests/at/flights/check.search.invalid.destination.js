var navBar = require('../../../pages/components/nav.tabs')();
var flightsForm = require('../../../pages/components/flights.form')();
var baseForm = require("../../../pages/components/base.form")();
var history = require('../../../pages/components/previous.searches')();

/**
 * 1. Open Flights form
 * 2. Type invalid values into 'From' and 'To'
 * 3. Click Search
 *
 * expected result: New record should no be added to the Previous searches
 */
describe("Flights: previous searches:", function() {

    var invalidValue = "qwerty!@#$%123456";

    it("should not be possible to add new record with invalid 'From' and 'To'", function() {
        browser.get("/");
        navBar.openFlights();

        flightsForm.fillFrom(invalidValue);
        flightsForm.fillTo(invalidValue);
        baseForm.clickSearch();

        expect(history.getPreviousSearchesBlock().isPresent()).toBe(false);
    });
});