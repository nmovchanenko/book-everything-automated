var history = function () {
    var historyRoot = element(by.css(".ng-valid-date.ng-valid.ng-valid-required.ng-dirty.ng-valid-date-disabled"));

    return {
        getRecordByIndex(index){
            return historyRoot.all(by.css(" span[class='ng-binding']")).get(index).getText();
        }

    }
};

module.exports = history;