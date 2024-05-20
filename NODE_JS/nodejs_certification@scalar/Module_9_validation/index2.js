//VALIDATION : [By adding 'required' keyword in schema ]

const mongoose = require('mongoose');//Import mongoose.

mongoose.connect('mongodb://127.0.0.1/testDatabase') //To connect to DB.(The url with default localhost adrress :127.0.0.1 and dbname:testDatabase)
    .then(() => console.log('Connection is Successfull')) //If connection is successfull
    .catch(err => console.log('Coud not connect to mongodb', err))

//Schema - (pattern or structure)
//1.How to Create a Schema ?

const courseSchema = new mongoose.Schema({
    name: {type : String, required : true , minlength : 5 , maxlength :200},
    tags : {type : Array , validate :{
        validator : function(tags){
           return tags.length > 1
        }
    }},
    category : {
        type :String,
        required :true,
        enum : ['DSA','Web','Mobile','Data Science']
    },
    creator:{type : String, required : true},
    publishedDate: { type: Date, default: Date.now },//to set multiple properties use '{}'
    isPublished: {type : String, required : true},
    rating : {type : Number, required : function(){return this.isPublished}}
})

//Right now this schema wont work becuase we dont have a 'Model' for that.
//2.How to create a Model ?
const Course = mongoose.model('Course', courseSchema) //specify model name,schema name inside.



async function createCourse() {//make function 'async' for 'await'.

    //3.Now Create some Datasets for this particular Model :'Course'.
    const course = new Course({
        name: 'MongoDB',
        tags : ['express'],
        creator : 'Jibin',
        category : 'DSA',
        isPublished : false,
        rating : 4.5
    })
    try {
        // await course.validate();
        // //4.Now Save these datas into Database(.save() method is used):
        const result = await course.save();
        console.log(result);
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
    }
}
createCourse();//calling function

