//Encapsulation : brings together data and the methods that operate on data in a single unit.

// function Person(_name,_age){
//     this.name = _name;
//     this.age =_age;
// }

// let person1 = new Person("Anshad",25);

// person1.name = 'Steve'; //This should Not be allowed.
// console.log(person1); //Steve

//TO solve :
function Person(_name,_age){
    var name = _name;
    this.age =_age;

    this.getName = ()=>{
        return name;
    }
}

let person1 = new Person("Anshad",25);

person1.name = 'Steve'; //this doesnt change anything.

console.log(person1.getName());//Anshad