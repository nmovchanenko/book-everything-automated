var baseForm = require("./base.form")(),
    amenities = require("../../test_data/data.enum.js").amenities,
    activeTab = require("./base.form")().getActiveTab();

var hotelsForm = function () {
    var lstAmenity = element(by.id("ratings"));
    var txtLocation = activeTab.element(by.css(" input[placeholder='Location']"));
    var labelLocation = activeTab.element(by.css(" [title='Location'] label"));
    var labelAmenity = element(by.css("label[for='ratings']"));

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

        getDisplayedLabels(){
            var labels = {};
            var setAmenityLabel = function () {
                return labelAmenity.getText().then(function(text) {
                    labels.amenity = text;
                });
            };
            var setLocationLabel = function () {
                return labelLocation.getText().then(function(text) {
                    labels.location = text;
                });
            };
            return setAmenityLabel()
                .then(setLocationLabel)
                .then(function () {
                    return labels;
                })
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