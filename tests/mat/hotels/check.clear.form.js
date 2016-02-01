var navBar = require('../../../pages/components/nav.tabs')(),
    hotelsForm = require('../../../pages/components/hotels.form')(),
    baseForm = require("../../../pages/components/base.form")(),
    utils = require("../../../test_data/data.utils.js")(),
    defaults = require("../../../test_data/data.enum.js").defaultInputs;

/**
 * 1. Open Hotels form
 * 2. Pick any valid dates
 * 3. Select any "Amenities" value
 * 4. Enter any "Location"
 * 5. click Clear button
 *
 * expected result: form was cleared - start, end dates and 'Amenities' are set to default, 'Location' is empty
 */
describe("Hotels: clear form: " , function() {
    var today = new Date(),
        startDate = utils.getNextDay(today),
        endDate = utils.getNextDay(startDate),
        location = "London";

    it("should reset inputs to default after 'Clear' button was clicked", function() {
        browser.get("/");
        navBar.openHotels();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);
        baseForm.fillLocation(location);
        baseForm.clearForm();

        expect(hotelsForm.getEnteredValues()).toEqual(defaults.HOTELS);
    });
});