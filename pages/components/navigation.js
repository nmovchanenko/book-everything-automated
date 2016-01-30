var tabName = require("../../lib/data.enum").tabs;

var navigation = function () {
    var navRoot = element(by.css(".nav.nav-tabs"));

    var selectMenu = function(menuName) {
        logger.info("Navigate to '" + menuName + "' tab");

        return navRoot.all(by.css(" a")).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === menuName;
            });
        }).then(function(filteredElements) {
            return filteredElements[0].click();
        });
    };

    return {
        openFlights(){
            return selectMenu(tabName.FLIGHT);
        },

        openHotels(){
            return selectMenu(tabName.HOTELS);
        },

        openCars(){
            return selectMenu(tabName.CARS);
        }
    }
};

module.exports = navigation;