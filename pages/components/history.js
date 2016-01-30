var baseForm = require("./base.form")();

var history = function () {
    var listOfRecords = baseForm.getActiveTab().all(by.css(" span[class='ng-binding']"));

    var getRecordByIndex = function (index){
        // TODO add error handler for listOfRecords
        return listOfRecords.get(index);
    };

    return {
        getListOfRecords(){
            return listOfRecords;
        },

        getRecordValueByIndex(index){
            logger.info("Get the value of history record #: " + index);
            return getRecordByIndex(index).getText();
        },

        removeRecordByIndex(index){
            logger.info("Remove record with index #: " + index);
            return baseForm.getActiveTab().all(by.css(" .glyphicon.glyphicon-remove.pull-right")).get(index).click();
        }

    }
};

module.exports = history;