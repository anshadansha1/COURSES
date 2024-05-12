//some() method : it returns boolean value.
//It return true if even 1 element satisfies the condition.
const transactions = [-1000 , 3000 , -4000 , -2000 , -898 , -3800,-4500];


let result = transactions.some(function(n){
    return n>0
})

console.log(result);//true : since atlest elements idd positive



//every() method :

let resultEvery = transactions.every(function(n){
    return n>0
})
console.log(resultEvery);//false :since all the elements are not positive.