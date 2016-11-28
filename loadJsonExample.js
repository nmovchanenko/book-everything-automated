var glob = require("glob");
var fs = require("fs");

glob("pages/**/*.js",function(err,files){
    if (err) throw err;
    files.forEach(function(item, index, array){
        console.log(item + " found");
    });
});