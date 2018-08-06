var debugRegex = require('./regexp/regexList');
var datexJSON = debugRegex.dateRegexJSON;
var timexJSON = debugRegex.timeRegexJSON;

var actualDate;

module.exports = {
    extractTheUnixTimeStamp: function (line) {
        var dateTobeparsed;
        var timeTobeAppended;
        var finalDateString = "";

        if (datexJSON["ISO"].test(line)) {
            dateTobeparsed = line.match(datexJSON["ISO"]);
        } else if (datexJSON["CSD"].test(line)) {
            dateTobeparsed = line.match(datexJSON["CSD"]);
        }

        if (timexJSON['NORMAL'].test(line)) {
            timeTobeAppended = line.match(timexJSON["NORMAL"]);
        }

        if (dateTobeparsed && timeTobeAppended) {
            finalDateString = dateTobeparsed[0] + ' ' + timeTobeAppended[0];
            actualDate = new Date(finalDateString).getTime() / 1000;
        }

        return actualDate;
    }
};