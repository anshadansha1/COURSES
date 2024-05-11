

////variables declared with 'var' keyword are not blocked scoped they are function scoped.
//(that is we can access it from outside scope,which should not be allowed).
var a =35;

if(a == 35){
    var b  = 40;
    console.log(b);
}
console.log(b);//b is accesssible since variables declared using 'var' keyword are not blocked scoped. 

//variables declared using var keyword are function scoped :
function test(){
    var c = 100;
    console.log(c);
}

test();
console.log(c); //ReferenceError: c is not defined