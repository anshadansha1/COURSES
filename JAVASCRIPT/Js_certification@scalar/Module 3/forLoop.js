//Loops are used to do some repetative tasks and used to control a flow of program

var a = 'Hello World'

//The for loop
for( var i = 0; i < 10 ; i++){
    console.log(a);

}

//You have an Array and you have to square each element of that array:
var num = [2 ,3 ,4, 5 ,6 ,7,8];

var squaredArr = [] ; //empty array

for(var i = 0; i < num.length ;i++){
    squaredArr.push(num[i]*num[i])
}

console.log(squaredArr);

