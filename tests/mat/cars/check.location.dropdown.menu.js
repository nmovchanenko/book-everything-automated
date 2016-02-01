var navBar = require('../../../pages/components/nav.tabs')(),
    baseForm = require('../../../pages/components/base.form')(),
    carsForm = require('../../../pages/components/cars.form')();

/**
 * 1. Open Cars form
 * 2. Type any valid value to 'Location'
 *
 * expected result: Should be displayed drop-down menu with available locations
 */
describe("Flights form: " , function() {
    var location = "Rome";

    it("should be displayed drop-down menu with locations after typing a value in 'From'", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.fillLocation(location);
        expect(carsForm.getLocationDropdown().isDisplayed()).toBe(true);
    });
});