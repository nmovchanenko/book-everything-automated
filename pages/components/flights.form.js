var baseForm = require("./base.form")(),
    activeTab = require("./base.form")().getActiveTab();

/**
 * Contains fields and functions related to Flights form
 */
var flightsForm = function () {
    var txtCityFrom = element(by.css("input[placeholder='From']"));
    var labelFrom = activeTab.element(by.css(" [title='From'] label"));
    var txtCityTo = element(by.css("input[placeholder='To']"));
    var labelTo = activeTab.element(by.css(" [title='To'] label"));
    var listboxFrom = activeTab.element(by.css(" [title='From'] .dropdown-menu.ng-isolate-scope"));
    var listboxTo = activeTab.element(by.css(" [title='To'] .dropdown-menu.ng-isolate-scope"));

    return {
        fillFrom(cityFrom){
            return txtCityFrom.sendKeys(cityFrom).then(function() {
                logger.info("Typing text in 'From': " + cityFrom);
            }, function(err) {
                throw new Error("Error while typing in 'From': " + err.message);
            });
        },

        fillTo(cityTo){
            return txtCityTo.sendKeys(cityTo).then(function() {
                logger.info("Typing text in 'To': " + cityTo);
            }, function (err) {
                throw new Error("Error while typing in 'To': " + err.message);
            });
        },

        getEnteredValues(){
            var actualValues = {};

            baseForm.getDisplayedStartDate().then(function(start) {
                actualValues.startDate = start;
            });

            baseForm.getDisplayedEndDate().then(function(end) {
                actualValues.endDate = end;
            });

            txtCityFrom.getText().then(function(cityFromValue) {
                actualValues.cityFrom = cityFromValue;
            }, function (err) {
                throw new Error("Error while getting text from 'From' input: " + err.message);
            });

            txtCityTo.getText().then(function (cityToValue) {
                actualValues.cityTo = cityToValue;
            }, function (err) {
                throw new Error("Error while getting text from 'To' input: " + err.message);
            });

            return actualValues;
        },

        getDisplayedLabels(){
            var labels = {};

            labelFrom.getText().then(function(text) {
                labels.fromInput = text;
            }, function(err) {
                throw new Error("Error while getting text from 'From label': " + err.message);
            });

            labelTo.getText().then(function(text) {
                labels.toInput = text;
            }, function (err) {
                throw new Error("Error while getting text from 'To label': " + err.message);
            });

            return labels;
        },

        getListboxOptionsFrom(){
            return listboxFrom;
        },

        getListboxOptionsTo(){
            return listboxTo;
        }
    }
};

module.exports = flightsForm;