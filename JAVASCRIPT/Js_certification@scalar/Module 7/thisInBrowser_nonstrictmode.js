//'this' IN BROWSER----

//1.console.log(this) : referneces 'window' object. [in node we have 'global']
console.log(this);

//2.function - > referneces 'window' object.
function displayThis(){
    console.log(this); //referneces 'window' object.
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

//4.Object ->function ->function : referneces 'window' object.
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
