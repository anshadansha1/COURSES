//CLASS concept is added in ES6.

class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

let person1 = new Person('Anshad' ,23);
let person2 = new Person('Nihal' ,22);
let person3 = new Person('Majo' ,23);

person1.welcome();//calling function inside object.
console.log(person1);
console.log(person2);
console.log(person3);