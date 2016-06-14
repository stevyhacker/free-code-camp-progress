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