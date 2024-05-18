function myMiddleware2(req , res , next ){
    console.log('I am second Custom Middleware');
    next();
}
//exporting
module.exports = myMiddleware2;