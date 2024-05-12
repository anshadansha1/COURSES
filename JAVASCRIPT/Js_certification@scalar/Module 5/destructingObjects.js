//Destructing an Object :

let myObject = {
    name : 'Adam',
    age : 25 ,
    gender : 'M'
}


let { a , b , c } = myObject;
console.log(a);//undefined
console.log(b);//undefined
console.log(c);//undefined
//We get output as undefined because we cant destructure an Object like Array.
//We have to the use the same key name used in object :
let { name , age , gender } = myObject;

console.log(name);
console.log(age);
console.log(gender);

//So Is Thare any way to give another name to this variables ?.
//YES :
let { name:n , age:ag , gender:g } = myObject;
console.log(n);
console.log(ag);
console.log(g);

//What if You have a Nested Object :
let myObject2 = {
    id : 'D1',
    course : 'MCA',
    address : {
        country : 'India',
        state : 'kerala',    
    }

}

let {id:i , course:cr ,address : {country :cy , state : st}} = myObject2;
console.log(i);
console.log(cr);
console.log(cy);
console.log(st);
