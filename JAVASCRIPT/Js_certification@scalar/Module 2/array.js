//Array : In JS Array can store multiple values of differnt datatypes
var arr = [12, 'Ferrari' , true , 12.4];
console.log(arr);

//Accessing Elements 
var a = arr[0];
console.log(a);

//replacing array elememt 
arr[1] = 'Bently';
console.log(arr[1]);

//length property
console.log('Length of array is : ',arr.length);

//------Inbuilt Array methods------------
//1.pop() method [REMOVES ELEMENT FROM END OF AN ARRAY]:
var arr2 = [12 , 14 , 56 , 57];
console.log('Array : '+arr2);
var c = arr2.pop();
console.log('Popped Element : '+c);
console.log('Array after popped : ', arr2);

//2.pop() method [PUSHES ELEMENT TO THE END  OF ARRAY]:
arr2.push(100);
console.log('\nArray after Push  : ', arr2);

//3.shift() method [REMOVES ELEMENT FROM START OF AN ARRAY]:
var d = arr2.shift();
console.log('\nShifted : ' + d);
console.log('Array after shift : ', arr2);

//4.unshift() method [PUSHES ELEMENT TO THE BEGINNING  OF ARRAY]:
arr2.unshift(102);
console.log('\nArray after Unshift : ', arr2);

