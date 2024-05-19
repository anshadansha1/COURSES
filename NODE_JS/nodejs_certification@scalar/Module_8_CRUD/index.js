//Import mongoose :
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase') //To connect to DB.(The url with default localhost adrress :127.0.0.1 and dbname:testDatabase)
.then(() => console.log('Connection is Successfull')) //If connection is successfull
.catch(err => console.log('Coud not connect to mongodb' , err))

//Schema - (pattern or structure)
//1.Create a Schema :

