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
    "FiveStars" : "★★★★★ 5 stars",
    "FourStars" : "★★★★ 4 stars and higher",
    "ThreeStars": "★★★ 3 stars and higher",
    "TwoStars"  : "★★ 2 stars and higher",
    getStars: function(stars) {
        switch (stars) {
            case this.FiveStars:
                return "★★★★★";
                break;
            case this.FourStars:
                return "★★★★";
                break;
            case this.ThreeStars:
                return "★★★";
                break;
            case this.TwoStars:
                return "★★";
                break;
            default:
                return "no stars";
                break;
        }
    }
};