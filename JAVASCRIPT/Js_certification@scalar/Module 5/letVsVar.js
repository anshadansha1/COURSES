//'var' has a problem that it allows us to redeclare a variable which is a PROBLEM ,which should not be Allowed.
var a =20;
var a = 35;
var b = 30;

console.log(a);
console.log(b);

//SOLUTION to "Redeclaration Problem" :  use 'let' keyword instead of 'var' :
let a =20;
let a = 35;//SyntaxError: Identifier 'a' has already been declared
let b = 30;

console.log(a);
console.log(b);


//Variable declared with 'let' keyword are Blocked SCoped.
if(true){
    let c = 40 ;
    c= 20 ; //But varible declared using 'let' keyword can be Re-Assigned.
    console.log(c);
}
console.log(c);//cannot access variable c .Since it is declared using 'let'.



//Const Keyword:(Blocked Scope,Cannot Re-Declare,Cannot Re-Assign):
const d = 100;
console.log(d);

const d = 120;//Cannot Re-Declare
d = 25 ;//Cannot Re-Assign


