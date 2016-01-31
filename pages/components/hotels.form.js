var hotelsForm = function () {
    var lstAmenity = element(by.id("ratings"));

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
        }
    }
};

module.exports = hotelsForm;