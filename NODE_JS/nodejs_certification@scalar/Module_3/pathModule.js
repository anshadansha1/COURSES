//PATH Module :(We need a File to work with path Eg:f1.txt )

const path = require('path');//import path Module.

//1.extname : To know the extension of a File in a Path:
let ext = path.extname('E:\MCA\COURSES\NODE_JS\nodejs_certification@scalar\Module_3\f1.txt');
//2.basename : To know the extension of a File in a Path:
//USE DOUBLE SLASHES
let base = path.basename('E:\\MCA\COURSES\\NODE_JS\\nodejs_certification@scalar\\Module_3\\f1.txt');

console.log(ext);
console.log(base);

/*
output :

.txt
f1.txt

*/