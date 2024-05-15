// //FS Module With Directory:

const fs = require('fs');//import fs.

// 1.First Create Directory [mkdirSync()] :
fs.mkdirSync('myDirectory');

// //2.Check the content inside of a  Directory [readdirSync()]:
let folderPath = 'E:\\MCA\\COURSES\\NODE_JS\\nodejs_certification@scalar\\Module_3\\myDirectory';
let folderContent = fs.readdirSync(folderPath);
console.log('Folder Content : ' , folderContent);

/*OUTPUT :
Folder Content :  [ 'f1.txt', 'f3.txt' ]
*/

//3.Check particular directory exists or not [existSync()]:

let doesExist = fs.existsSync('myDirectory');
console.log(doesExist);//true

//4.Remove Directory []:
//Before that empty the directory.
fs.rmdirSync('myDirectory');
console.log('Directory Has been Deleted');