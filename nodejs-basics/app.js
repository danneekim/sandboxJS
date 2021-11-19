/** Global Objects
 * In Browser - window | In Node - global
 * Every file in Node is a module
 * Unless exported (i.e - module.exports)
 * variables & fxns defined in file are local & private scope.
*/

/** At runtime - node wraps module in IIFE
 ** (function(exports, require, module, __filename, __dirname){ ... })
 ** console.log(module);
 ** console.log(__filename);
 ** console.log(__dirname);
*/

/** Logger Module*/
const logger = require("./logger");
logger('testing logger module');

/** Path Module*/
const path = require('path');
var pathObj = path.parse(__filename);
logger(pathObj);

/** OS Module*/
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/** File System Module*/
const fs = require('fs');

//sync
const files = fs.readdirSync('./');
console.log(files);
//async (preferred)
fs.readdir('./', function(err, files){
  if(err){
    console.log('Error', err);
  } else{
    console.log('Result', files);
  }
});

/** Event Module
 ** Class: Human | Object: John (inst. of Human)
*/
const EventEmitter = require('events'); // Class: container of defined properties/methods
const emitter = new EventEmitter();     // Object: instance of Class

// Register a listener
emitter.on('messageLogged', (arg) => { // e, eventArg
  console.log('Event Listener called', arg);
});
emitter.on('messageLogged', loggingEvent);

// Raise an event
emitter.emit('messageLogged', {id: 1, url: "http://"});

// Raise: logging (data: message)
function loggingEvent(message){
  console.log('Event Listener called:', message);
}









setTimeout(function(){ logger("Hello World"); }, 2000); // Hello after 2s delay
clearTimeout();
// setInterval(); //repeated fxn call after delay
// clearInterval();

