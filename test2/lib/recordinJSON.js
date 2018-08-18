// This file's primary function is to pass out the line to the regex checker and dateandTimeExtractor js files and get the results and store them in a json and return it ot function caller
// This mantains a counter for line counting 
// Dependencies:logLevelChecker,dateAndTimeExtractor
// Dependents: logFileReader

var logLevelChecker = require('./logLevelChecker');
var dateAndTimeExtractor = require('./dateAndTimeExtractor');

var counter = 0;

module.exports = {
    checkTheLogandRecordInJSON: function (line,file) {

        counter++;
        var jsonTobeloaded = {};
        //jsonTobeloaded['id'] = counter;

        jsonTobeloaded['LEVEL'] = logLevelChecker.checkForTheSeverityLevel(line);

        jsonTobeloaded["time"] = "" + dateAndTimeExtractor.extractTheUnixTimeStamp(line);

        jsonTobeloaded["line"] = line;

        jsonTobeloaded["fileName"] = file;

        return jsonTobeloaded;
    },


};