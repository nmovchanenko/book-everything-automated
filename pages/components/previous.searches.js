var activeTab = require("./base.form")().getActiveTab();

var previousSearches = function () {
    var listOfRecords = activeTab.all(by.css(" span[class='ng-binding']"));
    var historyBlock = activeTab.element(by.css(" .row.history.ng-scope"));

    var getRecordByIndex = function (index){
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
            return activeTab.all(by.css(" .glyphicon.glyphicon-remove.pull-right")).get(index).click();
        },

        getPreviousSearchesBlock(){
            return historyBlock;
        }

    }
};

module.exports = previousSearches;