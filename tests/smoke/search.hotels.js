var navBar = require('../../pages/components/nav.tabs')(),
    hotelsForm = require('../../pages/components/hotels.form')(),
    amenities = require("../../test_data/data.enum.js").amenities,
    utils = require("../../test_data/data.utils.js")(),
    history = require('../../pages/components/previous.searches')(),
    baseForm = require("../../pages/components/base.form")();

/**
 * 1. Open Hotels form
 * 2. Pick any valid dates
 * 3. Select any "Amenities" value
 * 4. Enter any "Location"
 * 5. click Search
 *
 * Expected: New record added to "Previous Searches" block
 */
describe("Hotels form: " , function() {

    var startDate = new Date(),
        endDate = utils.getNextDay(startDate),
        location = "Paris",
        fourStars = amenities.FOUR_STARS,
        indexOfLastAddedRecord = -1,
        actualHistoryRecord;

    it("should be possible to add new search record to 'Previous Searches' block", function() {
        browser.get("/");
        navBar.openHotels();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        hotelsForm.selectAmenity(fourStars);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        actualHistoryRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });
});