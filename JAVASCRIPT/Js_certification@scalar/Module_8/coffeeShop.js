//COFFEE SHOP-Promise

// function placeOrder(drink){
//     return new Promise(function(resolve , reject){
//         if(drink === 'coffee'){
//             resolve('Order For Coffee recieved');
//         }
//         else{
//             reject('Other orders Rejected');
//         }
//     })
// }

// //function for proccessing order time:
// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('Order is being Processed');
//         resolve(`${order} and is Served.`);
//     })
// }

// //two 'then's used because we have two Promises.
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);//for catch exception in reject state.
//     return orderIsProcessed;
// }).then(function(processedOrder){//chaining of Promise
//     console.log(processedOrder);
// })

//catch:

//WHAT if you have Lots of Promise ?
//Solution=> 'Async Wait' :
//--------------------------------->
function placeOrder(drink){
    return new Promise(function(resolve , reject){
        if(drink === 'coffee'){
            resolve('Order For Coffee recieved');
        }
        else{
            reject('Other orders Rejected');
        }
    })
}

//function for proccessing order time:
function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed');
        resolve(`${order} and is Served.`);
    })
}

async function serveOrder(){//'async' keyword
    try {
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
        let processedOrder =await processOrder(orderPlaced);
        console.log(processedOrder);
    } 
    catch (error) {
        console.log(error);
    }
    
}
serveOrder();

/*OUTPUT :
node "e:\MCA\COURSES\JAVASCRIPT\Js_certification@scalar\Module_8\coffeeShop.js"
Order For Coffee recieved
Order is being Processed
Order For Coffee recieved and is Served.
*/