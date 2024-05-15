//PATH Module :(We need a File to work with path Eg:f1.txt )
//NOTE : USE DOUBLE SLASHES in path.

const path = require('path');//import path Module.

//1.extname : To know the extension of a File in a Path:
let ext = path.extname('E:\\MCA\\COURSES\\NODE_JS\\nodejs_certification@scalar\\Module_3\\f1.txt');

//2.basename : To know the extension of a File in a Path:
let base = path.basename('E:\\MCA\COURSES\\NODE_JS\\nodejs_certification@scalar\\Module_3\\f1.txt');

console.log(ext);
console.log(base);

//3.To display the path of current file (this file)
console.log(__filename);
//4.To display the directory of current file (this file)
console.log(__dirname);

/*
output :

.txt
f1.txt
e:\MCA\COURSES\NODE_JS\nodejs_certification@scalar\Module_3\pathModule.js
e:\MCA\COURSES\NODE_JS\nodejs_certification@scalar\Module_3
*/