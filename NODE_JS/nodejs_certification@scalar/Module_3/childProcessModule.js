//Child process is a node module used to create sub process within a script .
//You can perform different tasks with your script by just using some methods.

const cp = require('child_process');//Importing child-process module.

cp.execSync('calc'); //Opens a calculator.['calc' is short code for opening calculator.]

cp.execSync('start chrome'); //opens chrome browser.
cp.execSync('start chrome https://www.google.com/');//opens google page directly

console.log('Output '+cp.execSync('node p1_test.js'));//prints output from a specified File.