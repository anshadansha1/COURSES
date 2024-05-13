//Synchronous Approach :[Using 'readFileSync()' method]
const fs = require('fs');

console.log('First Line');

let data =fs.readFileSync('f1.txt');

console.log('File 1 Data -> '+ data);

console.log('Last Line')
