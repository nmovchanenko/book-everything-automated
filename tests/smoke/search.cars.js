var navBar = require('../../pages/components/nav.tabs')(),
    carsForm = require('../../pages/components/cars.form')(),
    type = require("../../test_data/data.enum.js").carType,
    utils = require("../../test_data/data.utils.js")(),
    history = require('../../pages/components/previous.searches')(),
    baseForm = require("../../pages/components/base.form")();

/**
 * 1. Open Cars form
 * 2. Pick any valid dates
 * 3. Select any "Type" value
 * 4. Enter any "Location"
 * 5. click Search
 *
 * Expected: New record added to "Previous Searches" block
 */
describe("Cars form: " , function() {

    var startDate = new Date(),
        endDate = utils.getNextDay(startDate),
        location = "Berlin",
        carType = type.ECONOMY,
        indexOfLastAddedRecord = -1,
        actualHistoryRecord;

    it("should be possible to add new search record to 'Previous Searches' block", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        carsForm.selectType(carType);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        actualHistoryRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });
});