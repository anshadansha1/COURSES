const mongoose = require('mongoose');//import mongoose

const Joi = require('joi');//import joi

//Create a schema:
const categorySchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30 }  
})
//Create a Model :
const Category = mongoose.model('Category' , categorySchema);//'Category' is model based on schema 'categorySchema' .

//VALIDATION PART
function validateData(category){
    const schema = {
        name : Joi.string().min(3).required() //name should be with min length 3
    }

    return Joi.validate(category , schema);
}

//exporting to 'categories.js'
exports.Category = Category
exports.categorySchema = categorySchema
exports.validate = validateData
