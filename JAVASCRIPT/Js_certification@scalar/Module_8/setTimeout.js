//1.setTimeout : (You can provide function a timeout ,so after the specific time it will execute.)

console.log('Before');
function greet(){
    console.log('Hello from setTimeout');
}

setTimeout(greet,5000);//The Function 'greet' will be executed after '5' seconds.
console.log('After');

/*OUTPUT :
PS E:\MCA\COURSES\JAVASCRIPT\Js_certification@scalar\Module_8> node setTimeout.js
Before
After
Hello from setTimeout
*/

//setTimeout works Asynchronously :
//['Before' and 'After' are printed first then wait for 5 seconds and then prints function]