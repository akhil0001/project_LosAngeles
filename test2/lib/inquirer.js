const inquirer = require('inquirer');
const files = require('./files');

askWhichFileToPickup = () => {
    const questions = [{
        name: "Files",
        type: "checkbox",
        message: 'Select the log files to analyze ',
        validate: function (value) {
            if (value.length) {
              if(doesDirectoryExist(value))
            return true;
            }
            else{
                return 'Please enter the valid file location that has logs';
            }
        }
    }];
    return inquirer.prompt(questions);
};

module.exports = {
    askWhichFileToPickup : askWhichFileToPickup
};

