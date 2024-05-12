
a=4;
//1.ImPure Function : 
function addImpure(x){
    console.log(x+a);
    a++;
}
addImpure(2) //6
addImpure(2) //7
addImpure(2) //8

//Here we get different output for the same input .
//This is because we used an external factor a++;

//2.PURE Function  :[For the same input we should get the same output]
function addPure(x , a){
    console.log(x+a);
}
addPure(2 , 4) //6
addPure(2, 4) //6
addPure(2, 4) //6
//So,Never user an External Factor in Pure function.
//If you look closely this fucntion is also that Pure ,IT HAS A SIDE EFFECT.
//SIDE EFFECT : 'console.log()' uses an external resource .
//According programming paradigm ,addPure should only simply add two numbers.No need to display it.


//SO FINAL PURE FUNCTION LOOKS LIKE :
function addPureFinal(x , a){
    return x+a;
}

console.log(addPureFinal(4 , 6)); //10



