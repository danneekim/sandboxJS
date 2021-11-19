const EventEmitter = require('events');

var url = "http://mylogger.io/log";
class Logger extends EventEmitter {
  log(message){
    // Send an HTTP request
    console.log(message);

    // Raise an Event
    this.emit('messageLogged', {id: 1, url: 'http://'})
  }
}

module.exports = Logger;

/* export object */ 
// module.exports.log = log;
// module.exports.endPoint = url;
// { log: [Function: log ], endPoint: 'http://mylogger.io/log' }




