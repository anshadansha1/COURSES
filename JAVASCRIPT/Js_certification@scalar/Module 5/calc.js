//Specify the calculator functions
function add(a ,b ){
    console.log(a+b);
}
function sub(a ,b ){
    console.log(a-b);
}
function mul(a ,b ){
    console.log(a*b);
}
function div(a ,b ){
    console.log(a/b);
}

//To export this functions to another file use 'module.exports':
module.exports = {
    addition : add ,
    subtraction : sub ,
    multiplication : mul ,
    division : div 
}