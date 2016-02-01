var navBar = require('../../../pages/components/nav.tabs')(),
    carsForm = require('../../../pages/components/cars.form')(),
    baseForm = require("../../../pages/components/base.form")(),
    utils = require("../../../test_data/data.utils.js")(),
    cars = require("../../../test_data/data.enum.js").carType,
    defaults = require("../../../test_data/data.enum.js").defaultInputs;

/**
 * 1. Open Cars form
 * 2. Pick any valid dates
 * 3. Select any "Type" value
 * 4. Enter any "Location"
 * 5. click Clear button
 *
 * expected result: form was cleared
 */
describe("Cars: clear form: " , function() {
    var today = new Date(),
        startDate = utils.getNextDay(today),
        endDate = utils.getNextDay(startDate),
        luxury = cars.LUXURY,
        location = "London";

    it("should reset inputs to default after 'Clear' button was clicked", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);
        carsForm.selectType(luxury);
        baseForm.fillLocation(location);
        baseForm.clearForm();

        expect(carsForm.getEnteredValues()).toEqual(defaults.CARS);
    });
});