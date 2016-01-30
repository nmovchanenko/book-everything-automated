var navBar = require('../../pages/components/navigation')();
var carsForm = require('../../pages/components/cars.form')();
var type = require("../../lib/data.enum").carType;
var utils = require("../../lib/data.utils")();
var history = require('../../pages/components/history')();
var baseForm = require("../../pages/components/base.form")();

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
        endDate = utils.getTomorrowDate(startDate),
        location = "Berlin",
        carType = type.ECONOMY,
        indexOfLastAddedRecord = -1,
        actualHistoryRecord;

    it("should be possible to add new search record to 'Previous Searches' block", function() {
        browser.get("/");
        navBar.openCars();

        //baseForm.selectStartDate(startDate.toISOString());
        //baseForm.selectEndDate(endDate.toISOString());

        carsForm.selectType(carType);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        actualHistoryRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualHistoryRecord.isDisplayed()).toBe(true);
    });
});