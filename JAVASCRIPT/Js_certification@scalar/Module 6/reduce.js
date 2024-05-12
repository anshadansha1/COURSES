//Program :You need the sum of the every element in an array.

//imperative way :
let num = [1 , 2, 3,4 ,10];
let sum = 0; //accumulator

for (let i =0;i<num.length ;i++){
    sum += num[i];
}

console.log('sum = ' + sum);

//using reduce() method :[It always returns single value]

let result  = num.reduce(function(acc , value){
    let updatedSum =acc +value;
    return updatedSum;
} , 0 );

console.log(result);


//multiplication
let product  = num.reduce(function(acc , value){
    let updatedProduct =acc *value;
    return updatedProduct;
} , 1 );

console.log(product);