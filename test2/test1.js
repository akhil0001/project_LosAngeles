var fs = require("fs");
var path = require("path");

var logFilereader = require('./lib/logFileReader');
var createServer = require('./lib/createServer');


function startReadingTheLogFiles(currentWorkingDirectory) {
    var numberofFilestobeRead = 0;
    var filesTobeReadFromDirectory = [];
    var directoryPath = currentWorkingDirectory;
    var EXTENSION = /.log|.txt/;
    var targetFiles;

    fs.readdir(directoryPath, async function (err, filesFoundinDirectory) {
        if (err) {
            return console.log("There is an error reading the files in the directory ", err);
        }
        targetFiles = filesFoundinDirectory.filter(function (file) {
            return EXTENSION.test(path.extname(file).toLowerCase());
        });
        numberofFilestobeRead = targetFiles.length;
        console.log("The number of files to be read", numberofFilestobeRead);
        if (numberofFilestobeRead === 0) {
            console.log("OOPS! Looks like there are no log files to be read");
            process.exit();
        }
        targetFiles.forEach(function (file) {
            filesTobeReadFromDirectory.push(file);
        });
        for (const file of filesTobeReadFromDirectory) {
           
            await logFilereader.readEachLogFilefromDir(file, directoryPath);
        }
        createServer.proccedtoCreateServer();        
    });
}

module.exports = {
    startReadingTheLogFiles: startReadingTheLogFiles
}