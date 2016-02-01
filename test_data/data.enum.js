var utils = require("./data.utils.js")();

var EMPTY_INPUT = "";

var getStarsAmount = function (amount) {
    // "★" is equal to "\u2605";
    var starSymbol = "\u2605";
    var stars = "";
    for (var i = 0; i < amount; i++) {
        stars += starSymbol;
    }
    return stars;
};

// we need today and tomorrow dates represented as string YYYY-MM-DD
var TODAY_DATE = utils.formatToYYYYMMDD(new Date());
var TOMORROW_DATE = utils.formatToYYYYMMDD(utils.getNextDay(new Date()));

module.exports.tabs = {
    "FLIGHT": "Flights",
    "CARS"  : "Cars",
    "HOTELS": "Hotels"
};

module.exports.carType = {
    "LUXURY"    : "Luxury",
    "ECONOMY"   : "Economy",
    "REASONABLE": "Reasonable"
};

module.exports.amenities = {
    "FIVE_STARS" : getStarsAmount(5) + " 5 stars",
    "FOUR_STARS" : getStarsAmount(4) + " 4 stars and higher",
    "THREE_STARS": getStarsAmount(3) + " 3 stars and higher",
    "TWO_STARS"  : getStarsAmount(2) + " 2 stars and higher",
    getStars: function(stars) {
        switch (stars) {
            case this.FIVE_STARS:
                return getStarsAmount(5);
                break;
            case this.FOUR_STARS:
                return getStarsAmount(4);
                break;
            case this.THREE_STARS:
                return getStarsAmount(3);
                break;
            case this.TWO_STARS:
                return getStarsAmount(2);
                break;
            default:
                return "no stars";
                break;
        }
    }
};

module.exports.defaultInputs = {
    "FLIGHTS": {
        startDate   : TODAY_DATE,
        endDate     : TOMORROW_DATE,
        cityFrom    : EMPTY_INPUT,
        cityTo      : EMPTY_INPUT
    },
    "CARS": {
        startDate   : TODAY_DATE,
        endDate     : TOMORROW_DATE,
        type        : this.carType.ECONOMY,
        location    : EMPTY_INPUT
    },
    HOTELS: {
        startDate   : TODAY_DATE,
        endDate     : TOMORROW_DATE,
        amenity     : this.amenities.THREE_STARS,
        location    : EMPTY_INPUT
    }
};

module.exports.labels = {
    "FLIGHTS": {
        fromInput           : "From",
        toInput             : "To"
    },
    "CARS": {
        typeDropdown        : "Type",
        locationInput       : "Location"
    },
    "HOTELS": {
        amenityDropdown     : "Amenities",
        locationInput       : "Location"
    }
};