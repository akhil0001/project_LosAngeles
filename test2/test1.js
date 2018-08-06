var fs = require("fs");
var path = require("path");

var logFilereader = require('./lib/logFileReader');


function startReadingTheLogFiles (currentWorkingDirectory) {
var numberofFilestobeRead = 0;
var filesTobeReadFromDirectory = [];
var directoryPath = currentWorkingDirectory;
var EXTENSION = /.log|.txt/;
var targetFiles;

fs.readdir(directoryPath, function (err, filesFoundinDirectory) {
    if (err) {
        return console.log("There is an error reading the files in the directory ", err);
    }
    targetFiles = filesFoundinDirectory.filter(function(file){
        return EXTENSION.test(path.extname(file).toLowerCase());
    });
    numberofFilestobeRead = targetFiles.length;
    console.log("The number of files to be read", numberofFilestobeRead);
    if(numberofFilestobeRead === 0)
    {
        console.log("OOPS! Looks like there are no files to be read");
        process.exit();
    }
    targetFiles.forEach(function (file) {
        filesTobeReadFromDirectory.push(file);
    });
    logFilereader.readEachLogFilefromDir(filesTobeReadFromDirectory[numberofFilestobeRead-1],directoryPath);
});
}

module.exports ={
    startReadingTheLogFiles:startReadingTheLogFiles
}