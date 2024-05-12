//CallBack function
function printFirstName(firstname , cb){
    console.log(firstname);

}

printFirstName('Steve' ,printLastName);

function printLastName(lastname){
    console.log(lastname);
}
printLastName('Rogers');


