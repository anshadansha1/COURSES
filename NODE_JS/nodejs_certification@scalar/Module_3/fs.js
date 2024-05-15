//FS Module with files :(TO handle Files)

const fs = require('fs');//import fs.

//Create f1.txt ,f2.txt and f3.txt

//1.Reading a file [readFileSync()]:
let fileContent = fs.readFileSync('f1.txt');
console.log('Data of FIle 1 - >' + fileContent);//Use '+' to convert buffer to string data.

//2.Writing in a File [writeFileSync()],(Data inside will be overwritten) :
fs.writeFileSync('f2.txt','File 2 is Overwritten');//File 2 will be overwritten
//Even if f2.txt is not there it will create it.
console.log('File has been written');

//3.Append to a File[appendFileSync()],(Updating a File) :
fs.appendFileSync('f3.txt','Updating File 3');
console.log('File has been appended');

// 4.Delete a FIle [unlinkSync()] :
fs.unlinkSync('f2.txt');
console.log('File has been deleted.');

/*OUTPUT:
PS E:\MCA\COURSES\NODE_JS\nodejs_certification@scalar\Module_3> node fs.js
Data of FIle 1 - >Hi i am file 1
File has been written
File has been appended
*/