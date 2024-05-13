//Polymorphism : Poly(many) + Morph (forms) 
//It allows to perform single action in different ways.

class Animal{
    sound(){
        console.log('Animals make different sounds');
    }
}

class Dog{
    sound(){
        console.log('Dog Barks');
    }
}

class Cat{
    sound(){
        console.log('Cat Mews');
    }
}
let animal1 = new Animal();

let tommy = new Dog();
let percy = new Cat();

animal1.sound();

tommy.sound();
percy.sound();

//Same function acts different in different situation.