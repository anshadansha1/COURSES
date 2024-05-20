//Import mongoose :
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase') //To connect to DB.(The url with default localhost adrress :127.0.0.1 and dbname:testDatabase)
    .then(() => console.log('Connection is Successfull')) //If connection is successfull
    .catch(err => console.log('Coud not connect to mongodb', err))

//Schema - (pattern or structure)
//1.How to Create a Schema ?

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },//to set multiple properties use '{}'
    isPublished: Boolean,
    rating : Number
})

//Right now this schema wont work becuase we dont have a 'Model' for that.
//2.How to create a Model ?
const Course = mongoose.model('Course', courseSchema) //specify model name,schema name inside.



async function createCourse() {//make function 'async' for 'await'.

    //3.Now Create some Datasets for this particular Model :'Course'.
    const course = new Course({
        name: 'JavaScript',
        creator: 'Hari',
        isPublished: true,
        rating : 3

    })
    //4.Now Save these datas into Database(.save() method is used):
    const result = await course.save();
    console.log(result);

}
// createCourse();//calling function

// //How to Query for Documents :
// async function getCourses(){//Function to get courses
//     const courses =await Course.find({creator:'Nihal'}).select({name :1}).sort({name : 1});
//     console.log(courses);//displays found course
// }
// getCourses();//calling

//Comparsion Operators:
// 1.eq - (for equals)
// 2.gt - (for greater than)
// 3.gte - (greater than and equalsto)
// 4.lt  - (less than)
// 5.lte - (less than and equalsto )
// 6.in 
// 7.not in

// async function getCourses(){//Function to get courses
//     const courses =await Course.find({rating : {$gte : 4 }}).select({name :1 , publishedDate :1});
//     console.log(courses);//displays found course
// }
// getCourses();//calling

// async function getCourses(){//Function to get courses
//     const courses =await Course.find({rating : {$in : [3 ,4.2] }}).select({name :1 , publishedDate :1});
//     console.log(courses);//displays found course
// }
// getCourses();//calling

//Logical Query Operators:
//1.or
//2.and
// async function getCourses2(){//Function to get courses
//     const courses =await Course.find({rating : {$in : [3 ,4.2 , 4.5 , 4.3] }}).select({name :1 , publishedDate :1})
//     .and([{creator:'Anshad'},{rating : 4.5}])
//     console.log(courses);//displays found course
// }
// getCourses2();//calling

//How to Update a Document :
// async function updateCourse(id){//parameter 'id' used to update using id
//     let course = await Course.findById(id)

//     if(!course) return;//returns if specific id not found.

//     course.name = 'Python'
//     course.creator = 'Steve'
//     const updatedCourse = await course.save()
//     console.log(updatedCourse)

// }

// updateCourse('664a0b255a3b2d29cedd1d3b');//calling by passing an id.(you will get id from Compass)

//How to Delete a Document :
async function deleteCourse(id){//parameter 'id' used to delete using id
    let course = await Course.findByIdAndDelete(id);//this will find the course of specific id and delete it.
    console.log(course);

}

deleteCourse('664a0b255a3b2d29cedd1d3b');