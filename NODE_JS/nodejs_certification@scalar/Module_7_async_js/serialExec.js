//Serial Execution :(You have make something dependent)
const fs = require('fs');

console.log('First Line');


fs.readFile('f1.txt',cb1); //Reading file Asynchronously

function cb1(err,data){
    if(err){
        console.log(err);
    }
    console.log('File 1 data ->' + data);
    fs.readFile('f2.txt', cb2);//readfile of 2nd file is put inside file 1
}


function cb2(err,data){
    if(err){
        console.log(err);
    }
    console.log('File 2 data ->' + data);
    fs.readFile('f3.txt', cb3);//readfile of 3rd file is put inside here
}



function cb3(err,data){
    if(err){
        console.log(err);
    }
    console.log('File 3 data ->' + data);
}

console.log('Last Line')


/*OUTPUT : (How many times you run the code it will be in order)
PS E:\MCA\COURSES\JAVASCRIPT\Js_certification@scalar\Module_8> node serialExec.js
First Line
Last Line
File 1 data ->I am file 1

File 2 data ->I am file 2
File 3 data ->This is File 3

*/