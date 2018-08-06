#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const test1 =  require('./test1');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Analog',
        {horizontalLayout: 'full'})
    )
);

function getTheCurrentDirectory () {
    test1.startReadingTheLogFiles(files.getCurrentDirectoryBase());
}

getTheCurrentDirectory();

