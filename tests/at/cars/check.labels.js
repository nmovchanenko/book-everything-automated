var navBar = require('../../../pages/components/nav.tabs')(),
    carsFrom = require('../../../pages/components/cars.form')(),
    utils = require("../../../test_data/data.utils.js")(),
    labels = require("../../../test_data/data.enum.js").labels;

/**
 * 1. Open Cars form
 * 2. Check cars specific labels
 *
 * expected result: Cars specific labels: Type, Location
 */
describe("Cars form: " , function() {

    it("should contain specific labels 'Type', 'Location'", function() {
        browser.get("/");
        navBar.openCars();

        var carsLabels = carsFrom.getDisplayedLabels();

        expect(carsLabels).toEqual(labels.CARS);
    });
});