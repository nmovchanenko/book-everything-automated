var testData = require("./../test_data/simpleData.json");

console.log(testData.some_text); // will print: some string
console.log(testData.some_number); // will print: 12345
console.log(testData.some_array); // will print: [ 'value 1', 'value 2', 'value 3' ]
console.log(testData.some_object); // will print: { data_1: 'data_1', data_2: 'data_2' }