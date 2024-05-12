//Program :Square of Array

//Normal Approach:
let arr =[ 1 , 2, 3 , 4 , 5];

let squaredArr = [] ;

for (let i = 0; i<arr.length ; i++){
    squaredArr.push(arr[i]*arr[i]);
}
console.log(squaredArr);

//Using Map() method .
//1)Map method will loop through every element of your array and will perform specific operations that  you have provided
//2)Map method always return a New Array.
const num = [1 , 2 ,3 ,4 , 5];
const squaredNum = num.map(function(n){ //here 'n' will have each array elements
    return n*n;
})

console.log(squaredNum);

//Example 2 :map() method
const transactions = [1000 , 3000 , 4000 , 2000 , -898 , 3800,-4500];
const introDollar = 80;

let transactionsInDollars = transactions.map((amount)=>{
    return amount/introDollar.toFixed(0);
})

console.log(transactionsInDollars);

//Same problem using Foreach :


let transactionsInDollars2 = transactions.forEach((amount2)=>{
    return amount2/introDollar.toFixed(0);
})

console.log(transactionsInDollars2);//undefined 

//NOte :When forEach is used it doesnt returns anything.