//NON STRICT MODE
//1.console.log(this): {}
console.log(this); //gives '{}'

//2.function ->references Global Object
//Whenever you are using a function 'this' keyword refers to a global object.
function displayThis(){
    console.log(this); //returns global object details.
}

displayThis();

//3.Object->Function : references Object itself
//If the function that is beign refereneced is an object,then 'this' references the object itself.

let myObj = {
    name : 'Anshad',
    age : 24 ,
    myFn : function(){
        console.log(this.name);//Anshad
    }
}

myObj.myFn();

//4.Object ->function ->function :references Global object
//So when you have a function inside a function inside an object it references to the Global object.
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
