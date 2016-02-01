var navBar = require('../../../pages/components/nav.tabs')(),
    hotelsFrom = require('../../../pages/components/hotels.form')(),
    utils = require("../../../test_data/data.utils.js")(),
    labels = require("../../../test_data/data.enum.js").labels;

/**
 * 1. Open Hotels form
 * 2. Check hotels specific labels
 *
 * expected result: Hotels specific labels: Amenities, Location
 */
describe("Hotels form: " , function() {

    it("should contain specific labels 'Amenities', 'Location'", function() {
        browser.get("/");
        navBar.openHotels();

        var hotelsLabels = hotelsFrom.getDisplayedLabels();

        expect(hotelsLabels).toEqual(labels.HOTELS);
    });
});