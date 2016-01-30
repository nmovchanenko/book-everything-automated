var hotelsForm = function () {
    var lstAmenity = element(by.id("ratings"));

    return {
        selectAmenities(amenity){
            logger.info("Select amenity: " + amenity);
            return lstAmenity.click().then(function () {
                return element(by.cssContainingText("#ratings option", amenity)).click();
            });
        }
    }


};

module.exports = hotelsForm;