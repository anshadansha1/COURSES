//Inheritance : 1)Classical Inheritance
//1)Classical Inheritance : Methods and properties from Base class can be passed into derived class.

class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age);//Super function ,To inherit from base class
        this.classStrength =_classStrength;

    }
}

class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age);
        this.cgpa = _cgpa;
    }
}

let person1 = new Person('Anshad',23);
console.log(person1);

let teacher1 = new Teacher('Hari',32,58);
console.log(teacher1);

let student1 = new Student('Nihal',22,8.5);
console.log(student1);


