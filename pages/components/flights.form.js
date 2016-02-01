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
            var setStartDate = function () {
                return baseForm.getDisplayedStartDate().then(function(start) {
                    actualValues.startDate = start;
                });
            };
            var setEndDate = function () {
                return baseForm.getDisplayedEndDate().then(function(end) {
                    actualValues.endDate = end;
                });
            };
            var setCityFrom = function () {
                return txtCityFrom.getText().then(function(cityFromValue) {
                    actualValues.cityFrom = cityFromValue;
                });
            };
            var setCityTo = function () {
                return txtCityTo.getText().then(function (cityToValue) {
                    actualValues.cityTo = cityToValue;
                });
            };
            return setStartDate()
                .then(setEndDate)
                .then(setCityFrom)
                .then(setCityTo)
                .then(function() {
                    return actualValues;
                });
        },

        getDisplayedLabels(){
            var labels = {};
            var setLabelFrom = function () {
                return labelFrom.getText().then(function(text) {
                    labels.cityFrom = text;
                });
            };
            var setLabelTo = function () {
                return labelTo.getText().then(function(text) {
                    labels.cityTo = text;
                });
            };
            return setLabelFrom()
                .then(setLabelTo)
                .then(function () {
                    return labels;
            })
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