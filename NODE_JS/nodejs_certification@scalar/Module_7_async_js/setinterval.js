//2.setInterval : 
//(You can provide function an Interval ,so that it will execute at each interval of the given.)
//This is also  Asynchronous
console.log('Before');

function hello(){
    console.log('Hello');
}

let timer = setInterval(hello,1000);//The Function 'hello' will be executed with an interval'1' seconds.
//BUT this will print infinitely.To solve :-
setTimeout(function(){
    clearInterval(timer);//To Stop the infinite execution After 3 seconds
},3000)


console.log('After');

/*OUTPUT :
PS E:\MCA\COURSES\JAVASCRIPT\Js_certification@scalar\Module_8> node setInterval.js
Before
After
Hello
Hello
*/
