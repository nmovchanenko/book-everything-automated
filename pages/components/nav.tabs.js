var tabName = require("../../test_data/data.enum.js").tabs;

var navTabs = function () {
    var navRoot = element(by.css(".nav.nav-tabs"));

    var selectTab = function(tabName) {
        return navRoot.all(by.css(" a")).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === tabName;
            });
        }).then(function(filteredElements) {
            return filteredElements[0].click().then(function() {
                logger.info("Opening " + tabName + " tab");
            });
        }, function (err) {
            throw new Error("Error while selecting tab " + tabName + " :" + err.message);
        });
    };

    return {
        openFlights(){
            return selectTab(tabName.FLIGHT);
        },

        openHotels(){
            return selectTab(tabName.HOTELS);
        },

        openCars(){
            return selectTab(tabName.CARS);
        }
    }
};

module.exports = navTabs;