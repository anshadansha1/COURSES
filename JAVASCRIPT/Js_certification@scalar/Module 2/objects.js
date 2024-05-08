//In JS Objects are in Key-Value Pair

var person = {
    firstName : 'Muhammad',
    secondName : 'Anshad',
    age : 25 ,
    ownsCar : false

}

console.log(person);

//-----Accessing Values from Object ------
//1.Dot notation :
console.log(person.age);

//2.Bracket notation
console.log(person['firstName']);

//An Object can have an Array inside it.
//Nested Objects are possible in JS .
var cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102 ,
    friends : ['Bucky Barnes' , 'Bruce Banner' , 'Tony Stark'],
    isAvenger : true ,
    address : {
        state : 'New York',
        city : {
            name : 'Brooklyn',
            pincode : 123456
        }
    }
}

//To Access 'Bruce Banner'  :
console.log(cap.friends[1]);

//To Access 'Brooklyn' :
console.log(cap.address.city.name);

//Updating isAvenger :
cap.isAvenger = false;
console.log(cap.isAvenger);

//ADD to  object  :
cap.movies = ['age of ultron','civil war','first avenger'];
console.log(cap);

//DELETE from Object :

delete cap.age;
console.log(cap);


