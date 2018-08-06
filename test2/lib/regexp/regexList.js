module.exports = {
    levelRegexJSON: {
        "DEBUG": /DEBUG|Debug|Trace|debug/,
        "INFO": /information|info|INFO|HINT|NOTICE/,
        "WARN": /Warning|WARNING|WARN/,
        "ERROR": /ALERT|CRITICAL|EMERGENCY|ERROR|FAILURE|FATAL2/,
        "EXCEPTION": /Exception/
    },
    dateRegexJSON: {
        "ISO": /\b\d{2,4}-\d{2}-\d{2,4}/,
        "CSD": /\b\[0-9]{2,4}[^\w\s]\[1-12]{2}[^\w\s][0-9]{4}(T|\b)/
    },
    timeRegexJSON: {
        "NORMAL": /\d{2}:\d{2}(:\d{2}([.,]\d{3,})?)?(Z| ?[+-]\d{2}:\d{2})?/
    }
};

