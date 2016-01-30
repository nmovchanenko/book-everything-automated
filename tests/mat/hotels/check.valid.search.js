var navBar = require('../../../pages/components/navigation')();
var hotelsForm = require('../../../pages/components/hotels.form')();
var amenities = require("../../../lib/data.enum").amenities;
var utils = require("../../../lib/data.utils")();
var history = require('../../../pages/components/history')();
var baseForm = require("../../../pages/components/base.form")();

/**
 * 1. Open Hotels form
 * 2. Pick any valid dates
 * 3. Select any "Amenities" value
 * 4. Enter any "Location"
 * 5. click Search
 *
 * Expected: New record contains entered dates, stars amount and "Location" values
 */
describe("Hotels: previous searches:" , function() {

    var startDate = new Date(),
        endDate = utils.getTomorrowDate(startDate),
        location = "Paris",
        fourStars = amenities.FourStars,
        indexOfLastAddedRecord = -1,
        validHotelRecord = utils.getValidHotelRecord(startDate, endDate, location, fourStars),
        actualHotelRecord;

    it("should contain entered dates, stars and 'Location' values", function() {
        browser.get("/");
        navBar.openHotels();

        //baseForm.selectStartDate(startDate.toISOString());
        //baseForm.selectEndDate(endDate.toISOString());

        hotelsForm.selectAmenities(fourStars);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        actualHotelRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualHotelRecord).toEqual(validHotelRecord);
    });
});