'use strict'
//'this' IN BROWSER----Strict MODE

//1.console.log(this) : referneces 'window' object. [in node we have 'global']
console.log(this);

//2.function - > gives 'undefined'.
function displayThis(){
    console.log(this); //gives 'undefined'.
}

displayThis();

//3.Object->Function : references Object itself

let myObj = {
    name : 'Anshad',
    age : 24 ,
    myFn : function(){
        console.log(this.name);//Anshad
    }
}
myObj.myFn();

//4.Object ->function ->function : gives 'undefined'.
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
