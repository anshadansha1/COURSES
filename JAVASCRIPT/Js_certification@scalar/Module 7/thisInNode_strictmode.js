'use strict'
//STRICT MODE started
//1.console.log(this): {}
console.log(this); //gives '{}'

//2.function ->Gives 'undefined'
//In strict mode Whenever you are using a function 'this' keyword gives 'undefined'.
function displayThis(){
    console.log(this); //undefined
}

displayThis();

//3.Object->Function : references Object itself
//In Strict mode,If the function that is beign refereneced is an object,then 'this' references the object itself.

let myObj = {
    name : 'Anshad',
    age : 24 ,
    myFn : function(){
        console.log(this.name);//Anshad
    }
}
myObj.myFn();

//4.Object ->function ->function : Gives 'undefined'
//In Strict mode,  when you have a function inside a function inside an object it gives 'undefined'.
let myObj2 = {
    name : 'Anshad',
    age : 24 ,
    myFn2 : function(){
        function myFn3(){
            console.log(this);
        }
        myFn3();
    }
}

myObj2.myFn2();
