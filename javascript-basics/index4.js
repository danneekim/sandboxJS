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

