/** Global Objects
 * In Browser - window | In Node - global
 * Every file in Node is a module
 * Unless exported (i.e - module.exports)
 * variables & fxns defined in file are local & private scope.
*/

/**
 * At runtime - node wraps module in IIFE
 ** (function(exports, require, module, __filename, __dirname){ ... })
 ** console.log(module);
 ** console.log(__filename);
 ** console.log(__dirname);
*/ 

const logger = require("./logger");
logger('message');

setTimeout(function(){ console.log("Hello World"); }, 2000); // Hello after 2s delay
clearTimeout();

// setInterval(); //repeated fxn call after delay
// clearInterval();


