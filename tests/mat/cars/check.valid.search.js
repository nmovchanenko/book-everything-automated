var navBar = require('../../../pages/components/nav.tabs')();
var carsForm = require('../../../pages/components/cars.form')();
var type = require("../../../test_data/data.enum.js").carType;
var utils = require("../../../test_data/data.utils.js")();
var history = require('../../../pages/components/previous.searches')();
var baseForm = require("../../../pages/components/base.form")();

/**
 * 1. Open Cars form
 * 2. Pick any valid dates
 * 3. Select any "Type" value
 * 4. Enter any "Location"
 * 5. click Search
 *
 * Expected: New record contains entered dates, "Amenities" and "Location" values
 */
describe("Cars: previous searches: " , function() {

    var startDate = new Date(),
        endDate = utils.getNextDay(startDate),
        location = "Berlin",
        carType = type.REASONABLE,
        expectedCarsRecord = utils.getValidCarsRecord(startDate, endDate, location, carType),
        indexOfLastAddedRecord = -1,
        actualCarsRecord;

    it("should contain entered dates, 'Type' and 'Location' values", function() {
        browser.get("/");
        navBar.openCars();

        baseForm.selectStartDate(startDate);
        baseForm.selectEndDate(endDate);

        carsForm.selectType(carType);
        baseForm.fillLocation(location);
        baseForm.clickSearch();

        actualCarsRecord = history.getRecordValueByIndex(indexOfLastAddedRecord);
        expect(actualCarsRecord).toEqual(expectedCarsRecord);
    });
});