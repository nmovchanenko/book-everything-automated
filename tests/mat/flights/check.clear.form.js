var navBar = require('../../../pages/components/nav.tabs')();
var flightsForm = require('../../../pages/components/flights.form')();
var baseForm = require("../../../pages/components/base.form")();
var utils = require("../../../test_data/data.utils.js")();
var defaults = require("../../../test_data/data.enum.js").defaultInputs;

/**
 * 1. Open Flight form
 * 2. Pick any valid dates
 * 3. Fill out "from" and "to" fields
 * 4. click Clear button
 *
 * expected result: form was cleared - start and end dates are set to default, 'From' and 'To' are empty
 */
describe("Flights: clear form: " , function() {

    var today = new Date(),
        startDate = utils.getNextDay(today),
        endDate = utils.getNextDay(startDate),
        cityFrom = "Moscow",
        cityTo = "London";

    it("should reset inputs to default after 'Clear' button was clicked", function() {
        browser.get("/");
        navBar.openFlights();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        flightsForm.fillFrom(cityFrom);
        flightsForm.fillTo(cityTo);
        baseForm.clearForm();

        expect(flightsForm.getEnteredValues()).toEqual(defaults.FLIGHTS);
    });
});