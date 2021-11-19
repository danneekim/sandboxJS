var url = "http://mylogger.io/log";

function log(message){
  //Send an HTTP request
  console.log(message);
}

/* export object */ 
// module.exports.log = log;
// module.exports.endPoint = url;
// { log: [Function: log ], endPoint: 'http://mylogger.io/log' }

/* functional */ 
module.exports = log;



