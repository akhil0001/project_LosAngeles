const chalk = require('chalk');
const express = require('express');
const getPort = require('get-port');
const opn = require('opn');
var Spinner = require('cli-spinner').Spinner;

const app = express();
var availablePort = 8080;
//var spinner = new Spinner('Creating server..%s');
//spinner.setSpinnerString(13);
//spinner.start();

function proccedtoCreateServer()
{
    var erroredLines=[1,2,3];
    var resultJSONarray = [];
app.get('/', (req,res) => {
res.send('Good evening, Mr.Hunt \n You have to deal with '+erroredLines.length+'errors Should you choose to accept it?');
});

app.get('/json',(req,res) => {
    console.log(__dirname);
    res.send(resultJSONarray);
});

app.get('/html',(req,res) => {
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
});

(async () => {
availablePort = await getPort({port:[8000,8080,8888,9090]});
console.log(chalk.blue('The available port is',availablePort));
startListening();
}) ();

startListening = function(){
    //spinner.stop(true);
app.listen(availablePort, ()=>console.log(chalk.green('Server succesfully listening on the port :',availablePort)));

//opn('http://localhost:'+availablePort);
};
}
module.exports = {
    proccedtoCreateServer: proccedtoCreateServer
}