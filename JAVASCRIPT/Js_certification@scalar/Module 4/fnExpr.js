//Functions as Expression :
var add = function(a , b){
    console.log(a+b);
}
add(3,4);
//
var add = function(a , b){
    return a+b;
}
var sum = add ;
var result = sum(3,4);
console.log(result);

