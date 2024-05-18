function myMiddleware(req , res , next ){
    console.log('I am Custom Middleware');
    next();
}

 //exporting
module.exports = myMiddleware;
