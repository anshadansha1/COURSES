//1.create a seperate file 'calculator.js'.
//Modularity lets us use those contents in calculator.js in this file.

const calculator = require('./calculator');//import calculator.js 

calculator.addition(3 , 4);//Calls the function in calculator.js by passing values to that.
calculator.subtraction( 5 ,2);
calculator.multiplication( 3 , 4);
calculator.division(10 , 2);

