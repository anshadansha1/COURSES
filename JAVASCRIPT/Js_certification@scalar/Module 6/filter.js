//PROGRAM :You have to check for even numbers in an array and put them in a seperate array .

//Normal method :
let numbers = [ 1 , 2 ,20 , 35 , 12, 17, 46];

let evenArray = [];
for (let i= 0;i<numbers.length ;i++){
    if(numbers[i]%2 === 0){
        evenArray.push(numbers[i]);
    }
}
console.log(evenArray);

//Same problem Using filter() method :
//filter() : It returns a new Array .It will return all those elements that matches the specific condition.
//If the condition is true it will return the element for that condition and if it false it will discard that element.

let num = [1 , 2 ,20 , 35 , 12, 17, 46];

let evenNum = num.filter(function(n){
    return n%2 === 0;
})
console.log(evenNum);

//challenge : Check for all postive values in transactions.
const transactions = [-1000 , 3000 , -4000 , -2000 , -898 , -3800,-4500];

const depositedAmount = transactions.filter(function(amount){
    return amount>0;
})
console.log(depositedAmount);