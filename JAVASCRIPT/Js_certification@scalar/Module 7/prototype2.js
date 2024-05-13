function Person(_name,_age){
    this.name = _name;
    this.age = _age

}
Person.prototype.getNameAndAge =function(){
    console.log(`I am ${this.name} and my age is ${this.age}`);
}

let person1 = new Person('Majo',22);
let person2 = new Person('Keshu',22);

console.log(person1);
console.log(person2);