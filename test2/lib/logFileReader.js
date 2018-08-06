// This modules reads the log file line by line by using read streams 
// and calls the checkTheLogandRecordInJSON to make a regular expression check 
// This mantains an array to mantain the whole JSON of the log fed as input
// Dependencies: fs,readline,stream, recordinJSON,logLevelChecker,chalk,createServer
// Dependents: test1.js


var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const chalk = require('chalk');

var recordinJSON = require('./recordinJSON');
var logLevelChecker = require('./logLevelChecker');
var createServer = require('./createServer');

module.exports = {
    readEachLogFilefromDir: function (file,directoryPath) {
        console.log("Reading the file", file);

        var inputStream = fs.createReadStream(directoryPath + "/" + file);
        var outputStream = new stream();
        var readlineObject = readline.createInterface(inputStream, outputStream);
        var resultJSONArray = [];
        readlineObject.on('line', function (line, err) {
            if (err) {
                console.log(chalk.red("There has been an error while reading the file", file, "and the error is", err));
            } else {
                resultJSONArray.push(recordinJSON.checkTheLogandRecordInJSON(line));
            }
        });
        readlineObject.on('close', function () {
            console.log(chalk.bgRed("Number of Errors in file is", logLevelChecker.errLines.length));
            console.log(chalk.bgCyan("Number of Info level in statements", logLevelChecker.infoLines.length));
            console.log('finished here');
            fs.writeFile(directoryPath+'/analogOutput.json',JSON.stringify(resultJSONArray),function (err){
                if(err) throw err;
                console.log("saved!");
            });
            createServer.proccedtoCreateServer(logLevelChecker.errLines,resultJSONArray);
        });
    }
};