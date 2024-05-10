//The for-of statement creates a loop iterating over iterable object .
//including : built-in String ,Array, array-like objects like NodeList and also map and set.

var scores = [60 , 90 ,80 ,75]

//In for-of method,this 'score' variable have the element of Array.
//Where for-in method 'score' variable specify the index of Array
for( var score of scores){ 
    console.log(score)
}

//method - entries()

let colors = ['Red ', 'White','Green'];

for(var [index,color] of colors.entries()){
    //entries() method will carry index on first value and gives values of second value
    console.log(index + '->'+color);

}

//Strings
var str = 'Scalar';

for(var c of str){
    console.log(c);
}