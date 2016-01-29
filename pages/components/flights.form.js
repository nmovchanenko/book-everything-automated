/**
 * Contains fields and functions related to Flights form
 */
var flightsForm = function () {
    var txtCityFrom = element(by.css("input[placeholder='From']"));
    var txtCityTo = element(by.css("input[placeholder='To']"));

    return {
        fillFrom(cityFrom){
            txtCityFrom.sendKeys(cityFrom);
        },

        fillTo(cityTo){
            txtCityTo.sendKeys(cityTo);
        }
    }
};

module.exports = flightsForm;