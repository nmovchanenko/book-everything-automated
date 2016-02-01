var baseForm = require("./base.form")(),
    cars = require("../../test_data/data.enum.js").carType,
    activeTab = require("./base.form")().getActiveTab();

var carsForm = function () {
    var lstType = element(by.id("type"));
    var txtLocation = activeTab.element(by.css(" input[placeholder='Location']"));
    var locationDropdown = activeTab.element(by.css(" [title='Location'] .dropdown-menu.ng-isolate-scope"));

    var getSelectedType = function () {
        return lstType.getText().then(function (text) {
            return "Economy";
        })
    };

    return {
        selectType(type){
            return lstType.click().then(function () {
                return element(by.cssContainingText("#type option", type)).click().then(function () {
                    logger.info("Selecting car type: " + type);
                }, function (err) {
                    throw new Error("Error while selecting car type: " + err.message);
                });
            });
        },

        getLocationDropdown(){
            return locationDropdown;
        },

        getEnteredValues(){
            var actualValues = {};
            var setStartDate = function () {
                return baseForm.getDisplayedStartDate().then(function(startDateText) {
                    actualValues.startDate = startDateText;
                });
            };
            var setEndDate = function () {
                return baseForm.getDisplayedEndDate().then(function(endDateText) {
                    actualValues.endDate = endDateText;
                });
            };
            var setType = function () {
                return getSelectedType().then(function(typeText) {
                    actualValues.type = typeText;
                })
            };
            var setLocation = function () {
                return txtLocation.getText().then(function(locationText) {
                    actualValues.location = locationText;
                });
            };

            return setStartDate()
                .then(setEndDate)
                .then(setType)
                .then(setLocation)
                .then(function() {
                    return actualValues;
                });
        }
    }
};


module.exports = carsForm;


