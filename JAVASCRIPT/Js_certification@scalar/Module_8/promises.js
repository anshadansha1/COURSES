//Promises .

//How to produce a promise:
//State 1 : Pending State.
// let myPromise = new Promise(function(resolve , reject){
//     const a = 4;
//     const b = 5;

//     setTimeout(()=>{
//         if(a === b){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     },2000)
// })

// console.log(myPromise); 

/*OUTPUT :
Promise { <pending> }
*/

//State 2 : Fulfilled State.(using 'then' method)
let myPromise = new Promise(function(resolve , reject){
    const a = 4;
    const b = 5;

    setTimeout(()=>{
        if(a === b){
            resolve('The Values are Equal');
        }
        else{
            reject('The values were not equal');
        }
    },2000)
})

myPromise.then(function(result){
    console.log(result);
})//State 2:FULFILLED

//We have to catch exception while Promise is rejected using 'catch()' method .
myPromise.catch(function(failedResult){
    console.log(failedResult);
})//State 3 :REJECTED


//State 4 :Promise is SETTLED