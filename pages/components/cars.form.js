
var carsForm = function () {
    var lstType = element(by.id("type"));

    return {
        selectType(type){
            return lstType.click().then(function () {
                return element(by.cssContainingText("#type option", type)).click().then(function () {
                    logger.info("Selecting car type: " + type);
                }, function (err) {
                    throw new Error("Error while selecting car type: " + err.message);
                });
            });
        }
    }
};


module.exports = carsForm;


