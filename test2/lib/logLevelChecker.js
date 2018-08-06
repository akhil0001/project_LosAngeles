var debugRegex = require('./regexp/regexList');

var regexJSON = debugRegex.levelRegexJSON;
var debugLines = [],
    infoLines = [],
    errLines = [],
    warnLines = [];

module.exports = {
    checkForTheSeverityLevel: function (line) {
        if (regexJSON['ERROR'].test(line)) {
            errLines.push(line);
            return "ERROR";
        } else if (regexJSON['INFO'].test(line)) {
            infoLines.push(line);
            return "INFO";
        } else if (regexJSON['WARN'].test(line)) {
            warnLines.push(line);
            return "WARN";
        } else if (regexJSON['DEBUG'].test(line)) {
            debugLines.push(line);
            return "DEBUG";
        }
        else{
            return "NONE";
        }
    },
    debugLines: debugLines,
    infoLines: infoLines,
    errLines: errLines,
    warnLines: warnLines
};