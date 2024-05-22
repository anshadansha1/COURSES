const mongoose = require('mongoose');//import mongoose
const Joi = require('joi');//import joi
//import categorySchema from categoriesModel:
const {categorySchema} = require('../models/categoriesModel');

//Create a schema:
const courseSchema = new mongoose.Schema({
    title : {
        type : String ,
         required : true ,
         trim : true ,
         minlength : 5 ,
         maxlength : 255 
        } ,
    category : { //Here we will embbed another document(we have to select from already created category)
        type : categorySchema,
        required : true
    },
    
    creator :{
        type : String,
        required : true,
    },
    rating :{
        type : Number,
        required : true,
    }
})
//Create a Model :
const Course = mongoose.model('Course' , courseSchema);//'Course' is model based on schema 'courseSchema' .

//VALIDATION PART
function validateCourse(course){
    const schema = {
        title : Joi.string().min(5).max(255).required(), 
        categoryId : Joi.string().required(),
        creator : Joi.string().min(5).required(),
        rating : Joi.number().min(0).required()
    }

    return Joi.validate(course , schema);
}

//exporting to 'courses.js'
exports.Course = Course;
// exports.validateCourses = validateCourse;