//Asynchronous Approach :[Using 'readFile()' method]
const fs = require('fs');

console.log('First Line');

// let data1 =fs.readFileSync('f1.txt');

// console.log('File 1 Data -> '+ data1);

// let data2 =fs.readFileSync('f2.txt');

// console.log('File 1 Data -> '+ data2);

fs.readFile('f1.txt',cb1); //Reading file Asynchronously
//While reading if there is any error it will return to 'err' ,
//if no error return data to 'data'.
function cb1(err,data){
    if(err){
        console.log(err);
    }
    console.log('File 1 data ->' + data);
}

fs.readFile('f2.txt', cb2);

function cb2(err,data){
    if(err){
        console.log(err);
    }
    console.log('File 2 data ->' + data);
}

console.log('Last Line')


