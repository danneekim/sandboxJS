// Conditional Statements
/**
 * Hour
 * If hour is between 6am and 12pm: Good morning
 * If it is between 12pm and 6pm: Good afternoon
 * Otherwise: Good Evening!
*/
var hour = 20;
if(hour >= 6 && hour <= 12){
  console.log('Good Morning');
} else if ( hour > 12 && hour <= 18){
  console.log('Good Afternoon');
} else {
  console.log('Good Evening!');
}

// switch-case
let role = "guest";
switch(role){
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator User');
    break;
  default:
    console.log('Unknown user');
}

// Garbage Collection
/**
 * In low-level language like C or C++
 * You need to allocate/de-allocate memory but  
 * JS Engine has built-in Garbage Colelctor that happens automatically
 */

// Math
function getRandomInteger(min,max){
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max-min) +min);
}
let num = getRandomInteger(0,65); //random number - between 0-65

Math.round(1.9) //rounds
Math.max(1,2,3,4,5); //return largest num
Math.min(1,2.3,4,5); //returns smallest num