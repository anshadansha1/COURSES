//1.find() method : returns only the firs telement which satisfies the condition.

const transactions = [1000 , 3000 , 4000 , 2000 , -898 , 3800,-4500];
//If you want to get first withdrawal element that is negetive?
let firstWithdrawal = transactions.find(function(n){
    return n<0
})

console.log(firstWithdrawal);//-898

//2.findIndex() method :
//If you want to get index of first withdrawal element that is negetive?
let firstWithdrawalIndex = transactions.findIndex(function(n){
    return n<0
})
console.log('index -> '+firstWithdrawalIndex);//4
