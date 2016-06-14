//task 2
//var sum = 0;
//for ( var i = 2; i<process.argv.length;i++)
//	sum+= Number(process.argv[i]);

//console.log(sum);

//task 3
// var fs = require('fs');
// var testFile = fs.readFileSync(process.argv[2]);
// var newLineArray = testFile.toString().split('\n');
// console.log(newLineArray.length - 1);

//task 4
// var fs = require('fs');
// var testFile;
// fs.readFile(process.argv[2], logFileLines);
// function logFileLines(error, data) {
//     if (error) return console.error(error);
//
//     testFile = data;
//     var newLineArray = testFile.toString().split('\n');
//     console.log(newLineArray.length - 1);
//
// }

//task 5 my solution
// var fs = require('fs');
// var fileextenstion = "." + process.argv[3];
// // var filepath = process.argv[2];
// // console.log( " extension: " + fileextenstion);
// // console.log("filepath: " + filepath + " extension: " + fileextenstion);
//
// fs.readdir(process.argv[2], function (err, list) {
//     if (err) return console.error(err);
//
//     // console.log(list);
//     for (var i = 0; i < list.length; i++) {
//         if(list[i].includes(fileextenstion))
//         console.log(list[i]);
//     }
// });

// task 6

// var listFilesByExtensionModule = require('./listFilesByExtensionModule');
// listFilesByExtensionModule(process.argv[2], process.argv[3], printResults);
//
// function printResults(err, data) {
//     if (err) return console.error(err);
//
//     data.forEach(function (file) {
//         console.log(file);
//     })
// }

//task 7

// var http = require('http');
//
// http.get(process.argv[2], dataCallback);
//
// function dataCallback(response) {
//
//     response.on("data", function (data) {
//        console.log(data.toString());
//     });
//
// }


//task 8

var http = require('http');

http.get(process.argv[2], dataCallback);

function dataCallback(response) {
    var data = [];
    response.on('data', function (chunk) {
        data.push(chunk);
    });
    response.on('end', function () {
        var result = data.join('');
        console.log(result.length);
        console.log(result);
        return result
    });
}