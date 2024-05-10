//Hoisting : the process whereby the interpreter appears to move the declaration of functions, 
//variables, classes, or imports to the top of their scope, prior to execution of the code.


console.log(a);//Here in JS this wont return an Error but shows 'Undefined'.
greet(); //returns hello from Anshad bcs functions can be called before or after its definition

var a = 'hi';

function greet(){
    console.log('hello from Anshad');
}

//You cannot call a Function Expression Also(below):
add(2,3); //TypeError: add is not a function

var add = function(a , b){
    console.log(a+b);
}


