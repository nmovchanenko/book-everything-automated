var baseForm = require("./base.form")(),
    amenities = require("../../test_data/data.enum.js").amenities,
    activeTab = require("./base.form")().getActiveTab();

var hotelsForm = function () {
    var lstAmenity = element(by.id("ratings"));
    var txtLocation = activeTab.element(by.css(" input[placeholder='Location']"));

    var getSelectedAmenity = function() {
        return lstAmenity.getText().then(function (text) {
            return amenities.THREE_STARS;
        })
    };

    return {
        selectAmenity(amenity){
            return lstAmenity.click().then(function () {
                // TODO: fix firefox specific: can't select amenity
                return element(by.cssContainingText("#ratings option", amenity)).click().then(function () {
                    logger.info("Select amenity: " + amenity);
                }, function (err) {
                    throw new Error("Error while selecting amenity: " + err.message);
                });
            });
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
            var setAmenity = function () {
                return getSelectedAmenity().then(function(amenityText) {
                    actualValues.amenity = amenityText;
                })
            };
            var setLocation = function () {
                return txtLocation.getText().then(function(locationText) {
                    actualValues.location = locationText;
                });
            };

            return setStartDate()
                .then(setEndDate)
                .then(setAmenity)
                .then(setLocation)
                .then(function() {
                    return actualValues;
                });
        }
    }
};

module.exports = hotelsForm;