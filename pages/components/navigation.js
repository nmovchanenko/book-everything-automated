var navigation = function () {
    var FLIGHT = "Flights",
        CARS = "Cars",
        HOTELS = "Hotels";

    var navRoot = element(by.css(".nav.nav-tabs"));

    var selectMenu = function(menuName) {
        return navRoot.all(by.css(" a")).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === menuName;
            });
        }).then(function(filteredElements) {
            filteredElements[0].click();
        });
    };

    return {
        openFlights(){
            return selectMenu(FLIGHT);
        },

        openHotels(){
            return selectMenu(HOTELS);
        },

        openCars(){
            return selectMenu(CARS);
        }
    }
};

module.exports = navigation;