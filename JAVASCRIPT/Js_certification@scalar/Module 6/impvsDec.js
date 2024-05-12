//We will be given a number and we have to check that if the square of thata number is even or not :

//1.Imperative Way of writing a code:
const a = 5 ;

const aSquare = a*a ;
let isEven ;

if(aSquare % 2 === 0 ){
    isEven = true ;
}
else{
    isEven = false ;
}

console.log(isEven);


//2.Declarative way of writing same code :
const checkForSquare =(x) => (x*x % 2 === 0 ? true :false) 
console.log(checkForSquare(4));
