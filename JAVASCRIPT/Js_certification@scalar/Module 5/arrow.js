
//Without Using Arrow Function :
let a = 2;

let test1 = function(){
    console.log(a+2);
}

let test2 = function(a){
    console.log(a*2);
}

let test3 = function(a , b){
    console.log(a+b);
}

test1();
test2(4);
test3(2 , 6);


//With Using Arrow Function :
let b = 2;


let tests1 = ()=>{
    console.log(b+2);
} 

//1.No need to use any parenthesis For function with one parameter.
let tests2 = b =>{ 
    console.log(b*2);
}
//2.No Need Any curly braces if function is single-line function
let tests3 = (b , c) => console.log(b+c);


tests1();
tests2(4);
tests3(2 , 6);