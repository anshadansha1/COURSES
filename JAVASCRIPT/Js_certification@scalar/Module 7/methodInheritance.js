//Method Inheritance:
class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    welcome(){
        console.log(`Welcome ${this.name} `);//Method inheritance
    }
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age);//Super function ,To inherit from base class
        this.classStrength =_classStrength;

    }
    test(){
        super.welcome();//Method inheritance
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

teacher1.test();//Method inheritance.

