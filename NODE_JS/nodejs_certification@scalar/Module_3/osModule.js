//OS Module :(to get the information of your current system)
const os = require('os')//Import OS module

console.log(os.arch());//Displays Architecture of your OS (64 or 32)

console.log(os.platform());//Displays the platform of your OS

console.log(os.networkInterfaces());//Displays the network informations of your Os

console.log(os.cpus());//Displays the cpu's details (graphics,processor,configurations)

console.log('Total Memory : ',os.totalmem());//Displays the total memory .

console.log('Free Memory : ',os.freemem());//Displays the free memory.


