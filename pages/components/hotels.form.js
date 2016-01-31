var hotelsForm = function () {
    var lstAmenity = element(by.id("ratings"));

    return {
        selectAmenity(amenity){
            logger.info("Select amenity: " + amenity);
            return lstAmenity.click().then(function () {
                // TODO: fix firefox specific: can't select amenity
                return element(by.cssContainingText("#ratings option", amenity)).click();
            });
        }
    }


};

module.exports = hotelsForm;