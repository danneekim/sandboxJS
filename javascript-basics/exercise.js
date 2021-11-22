// 1. Max of 2 Number
// Write a function that takes 2 numbers & returns maximum of the two;

function checkMaxNumber(a , b){
  if (a > b) return a;
  if (a < b) return b;

  // if(a > b) return a;
  // return b;

  // return (a > b) ? a : b;
}

var num = checkMaxNumber(3, 5);
console.log(num);

// 2. Write a function to check Landscape OR Portrait
function isLandscape(width, height){
  if(width > height) return true;
  return false;

  // return (width > height);
}

let w = window.innerWidth;
let h = window.innerHeight;
// console.log(isLandscape(800, 600));
console.log(isLandscape(w,h));


// 3. FizzBuzz
/*
 * Divisible by 3 => Fizz
 * Divisible by 5 => Buzz
 * Divisble by both 3 & 5 => FizzBuzz
 * Not divisible by 3 or 5 => input
 * Not a number => 'Not a number'
 */

function fizzBuzz(input){
  if(typeof(input) !== num)
  return NaN;

  if((input%3 === 0) && (input%5 ===0))
  return 'FizzBuzz';
  
  if( input % 3  === 0)
  return 'Fizz';

  if( input % 5 === 0)
  return 'Buzz';

  return input;
}

const output = fizzBuzz('hello');
console.log(output);

// 4. DeMerit Points
/*
 * Speed limit = 70;
 * For +5 over speed limit -> +1 point
 * 12 points => suspended
*/

// function checkSpeed(speed){
//   if (speed < 75){
//     console.log('Okay');
//   } else if (speed >= 75){
//     let overLimit = speed - 70;
//     let points = Math.floor(overLimit / 5);
//     if(points < 12){ 
//       console.log(`+${points} points`);
//     } else {
//       console.log('suspended');
//     }
//   }
// }

function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;

  if(speed <= speedLimit + kmPerPoint){
    console.log('Ok');
    return;
  }
  
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if( points >= 12){
    console.log('License suspended');
  } else {
    console.log('Points', points);
  }
  
}
checkSpeed(130);


// 5. Show Numbers
/**
 * Show all numbers from input
 * Log if even or odd
 */

function showNumbers(limit){
  for (let i = 0; i <= limit; i++){
    if(i % 2 == 0)  console.log(`${i} - Even`);
    else console.log(`${i} - Odd`);
    
    // const message = (i%2 === 0 ) ? 'Even' : 'Odd';
    // console.log(i, message);
  }
}
showNumbers(10);

// 6. Count Truthy
/**
 * Takes an array
 * Return number of truthy elements in array
 */

function countTruthy(array){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(!!array[i]) count++;
  }

  // for (truthy of array){
  //   if(truthy) count++;
  // }
  return count;
}

const truthyElements = countTruthy([0,1,true,true,'Dannee', '', undefined,]);
console.log(truthyElements);

// 7. String Properties
/**
 * create function that shows all obj properties that are strings
 */

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
}

function showProperties(obj){
  for (string in obj){
    if(typeof(obj[string]) === 'string'){
      console.log(string, obj[string]);
    }
  }
}

showProperties(movie);

// 8. Sum of Multiples of 3 and 5
/**
 * function that takes number limit
 * return sum of all multiples of 3 and 5 
*/

function sum(limit){
  let sum = 0;

  for(let i = 1; i <= limit; i++){
    if((i%3 === 0) || (i%5 === 0)){
      sum+=i;
    }
    // if(i%3 === 0 && i%5===0){
    //   sum+=i;
    //   continue;
    // }
    // if(i%3===0) {
    //   sum+=i;
    // }
    // if(i%5===0){
    //   sum+=i;
    // } 
  }
  return sum;
}

const multiple = sum(15);
console.log(multiple);

// 9. Grade
/**
 * create a function to calculate avg grade of a student
 * takes in a array of grades - and returns letter grade
 * 1-59:  F
 * 60-69: D
 * 70-79: C
 * 80-89: B
 * 90-100: A
 */
const marks = [80,80,50]; //avg - 70 or C
const letterGrade = calculateGrade(marks);
console.log(letterGrade);

function calculateGrade(marks){
  // let totalScore = 0;
  // for(let i = 0; i < marks.length; i++){
  //   totalScore = totalScore + marks[i];
  // }
  // const avg = totalScore/marks.length;
  
  const avg = calculateAverage(marks);
  if(avg<60) return "F";
  if(avg<70) return "D";
  if(avg<80) return "C";
  if(avg<90) return "B";
  return "A";
}

function calculateAverage(array){
  let sum = 0;
  for(let value of array){
    sum += value;
  }
  return sum / array.length;
}

// 10. Stars
var pattern = showStars(2);
console.log(pattern);
/* return triangle star pattern
 * ie - 
    *
    **
    ***
    ****
    *****
*/

function showStars(rows){
  let stars = '';
  for (let i = 1; i <= rows; i++){
    for (let b = 0; b < i; b++){
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
}

/** return square star pattern
 * ie -
    *****
    *****
    *****
    *****
    *****
 */
// function showStars(rows){
//   let stars = "";
//   for (let i = 0; i < rows; i++){
//     for (let b = 0; b < rows; b++){
//       stars += "*";
//     }
//     // console.log(stars);
//     stars += "\n";
//   }
//   return stars;
// }


// 11. Prime Numbers
// Prime Number - only divisible by 1 and itself
// 0 & 1 are not prime numbers.

showPrimes(10);

// function showPrimes(limit){
//   for(let number = 2; number <= limit; number++){
//     let isPrime = true;
//     for(let factor = 2; factor < number; factor++){
//       if(number%factor === 0){
//         isPrime = false;
//         break;
//       }
//     }
//     // console.log(number);
//     if(isPrime) console.log(number);
//   }
// }

// refactored
function showPrimes(limit){
  for (let number = 2; number <= limit; number++){
    if(isPrime(number)) console.log(number);
  }
}

function isPrime(number){
  for (let factor = 2; factor < number; factor ++){
    if(number%factor === 0){
      return false;
    }
  }
  return true;
}


/* program to print prime numbers between the two numbers
 * take input from the user
*/
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }



