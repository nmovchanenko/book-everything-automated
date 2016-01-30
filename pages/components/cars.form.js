var baseForm = require("./base.form")();

var carsForm = function () {
    var lstType = element(by.id("type"));

    return {
        selectType(type){
            logger.info("Select car type: " + type);
            return lstType.click().then(function () {
                return element(by.cssContainingText("#type option", type)).click();
            });
        }
    }

};


module.exports = carsForm;


