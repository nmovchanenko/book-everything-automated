var navBar = require('../../../pages/components/nav.tabs')();
var flightsForm = require('../../../pages/components/flights.form')();
var utils = require("../../../test_data/data.utils.js")();

/**
 * 1. Open Flight form
 * 2. Type any valid value in 'Location'
 *
 * expected result: Should be displayed drop-down menu with locations
 */
describe("Flights form: " , function() {

    var cityFrom = "Rome",
        cityTo = "Madrid";

    beforeEach(function() {
        browser.get("/");
        navBar.openFlights();
    });

    it("should be displayed drop-down menu with locations after typing a value in 'From'", function() {
        flightsForm.fillFrom(cityFrom);
        expect(flightsForm.getListboxOptionsFrom().isDisplayed()).toEqual(true);
    });

    it("should be displayed drop-down menu with locations after typing a value in 'To'", function () {
        flightsForm.fillTo(cityTo);
        expect(flightsForm.getListboxOptionsTo().isDisplayed()).toEqual(true);
    });
});