let myObj = {};
console.log(myObj);

let person1 = {
    name : 'Anshad',
    age : 23,
}
console.log(person1);
console.log(person1.hasOwnProperty('name'));//true 

//constructor function :

function Person(_name,_age){
    this.name= _name;
    this.age= _age;
}
let person2 = new Person('Nihal',22);
console.log(person2);