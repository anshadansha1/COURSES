//CALCULATOR :

function add(a , b ){
    console.log( a + b );
}
function sub(a , b ){
    console.log( a - b );
}
function mul(a , b ){
    console.log( a * b );
}
function div(a , b ){
    console.log( a / b );
}

//Exporting functions:
module.exports = {
    addition : add ,
    subtraction : sub,
    multiplication : mul,
    division : div
}
