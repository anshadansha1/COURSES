//Call Apply and Bind

//NORMLA WAY :
// let person1 = {
//     firstname : 'Nihal',
//     lastname : 'Muhammad',
//     age : 23,

//     printDetails : function(){
//         console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old.`);
//     }
// } 

// let person2 = {
//     firstname : 'Majo',
//     lastname : 'Augustine',
//     age : 22,

//     printDetails : function(){
//         console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old.`);
//     }
// } 

// person1.printDetails();
// person2.printDetails();

//1.Call method :->
//Call :(this helps to point function 'printDetails' in person1 to person2)


// let person1 = {
//     firstname : 'Nihal',
//     lastname : 'Muhammad',
//     age : 23,

//     printDetails : function(){
//         console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old.`);
//     }
// } 

// let person2 = {
//     firstname : 'Majo',
//     lastname : 'Augustine',
//     age : 22,
// } 
// person1.printDetails.call(person2);//call

// person1.printDetails();


//2.Apply method :->[Here the arguments that has to be passed should be put inside and Array.]
let person1 = {
    firstname : 'Nihal',
    lastname : 'Muhammad',
    age : 23,
}

let printDetails = function(city,power){
    console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age}
     years old and I am from ${city} and I have ${power}.`);
}


let person2 = {
    firstname : 'Majo',
    lastname : 'Augustine',
    age : 22,
} 
//1.Call():
printDetails.call(person1,'New york','Iron Man Armor');
printDetails.call(person2,'California','Hammer');

//2.Apply():
printDetails.apply(person1,['London','WEB']);

//3.Bind() Method:
let  myFun = printDetails.bind(person1,'New york','Iron Man Armor');
console.log(myFun);//[Function: bound printDetails]
myFun();
