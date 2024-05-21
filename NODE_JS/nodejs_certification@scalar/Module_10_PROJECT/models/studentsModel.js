const mongoose = require('mongoose');//import mongoose
const Joi = require('joi');//import joi

//Create a schema:
const studentSchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30 } ,
    isEnrolled : {
        type : Boolean,
        default : false
    },
    
    Phone :{
        type : String,
        required : true,
        minlength : 10 ,
        maxlength : 25
    }
})
//Create a Model :
const Student = mongoose.model('Student' , studentSchema);//'Student' is model based on schema 'studentSchema' .

//VALIDATION PART
function validateData(student){
    const schema = {
        name : Joi.string().min(3).max(50).required(), //name should be with min length 3 and max 50
        Phone : Joi.string().min(10).max(50).required(),
        isEnrolled : Joi.boolean()
    }

    return Joi.validate(student , schema);
}

//exporting to 'students.js'
exports.Student = Student
exports.validate = validateData