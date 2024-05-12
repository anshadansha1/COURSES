//CallBack function
function printFirstName(firstname , cb){
    console.log(firstname);
    cb('Rogers')

}

function printLastName(lastname){
    console.log(lastname);
}

printFirstName('Steve' ,printLastName);//Callback

//Program :num is Even or not
const isEven = (n) => {
    return n%2 === 0;
}

let printResult = (evenFn , num ) =>{
    const isNumEven = evenFn(num);
    console.log(`The number ${num} is ${isNumEven}`);
}

printResult(isEven , 16 );