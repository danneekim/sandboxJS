/** Create a StopWatch object
 * property: duration (readonly)
 * methods: start() / stop() / reset()
 ** duration (readonly/private)
  * returns elapsed duration || undefined 
 ** start()
  * throw error - 'Stopwatch has already started'
  * starts running duration
 ** stop() 
  * throw error - 'Stopwatch has not started' 
  * stops running duration
 ** reset()
  * resets duration & stops running
 */

function StopWatch(){
  let running = false;
  let startTime = 0;
  let endTime = 0;
  let duration = 0;

  this.start = () =>{
    if(running){
      throw new Error('Stopwatch has already started');
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function(){
    if(!running){
      throw new Error('Stopwatch has not started.');
    }
    running = false;
    endTime = new Date();


    const seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration += seconds;
  }

  this.reset = function(){
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function(){ return duration; }
  });
}


