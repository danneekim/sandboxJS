console.log('Hello World');
// alert('This is a alert');

// Variables
var fullName = "Dannee Kim" //global-scope 
let firstName = "Dannee"; //block-scope
const lastName = "Kim"; //readonly

/** Variables 
 * Cannot be a reserved keyword
 * Should be meaningful
 * Cannot start with a number (1name)
 * Cannot contain a space or hyphen (-)
 * Are case-sensitive
*/

/** Static vs Dynamic Languages
 * Static Typed 
    * String name = 'Dannee'; 
    * In statically-typed languages - type CANNOT be changed   
 * Dyanamic Type
    * JS is a dynamically-typed language
    * let name = "Dannee";
    * In dynamically-typed can be changed - type CAN be changed    
    * EX:
    ** typeof(name); //string
    ** name = 0;
    ** typeof(name); //number
*/

// Primitve Types
let name = "Dannee"    //string
let age = 27           //number
let isApproved = true  //boolean
let fName = undefined; //undefined
let lName = null;      //null

// Reference Types
// Objects
let person = {}        //object
person = {
  name: "Dannee",
  age: 27
}
//Dot Notation
person.name = "Dan"
//Bracket Notation
person['name'] = "John"
//Bracket Notation (v2)
let selected = "name";
person[selected] = "Mary"

console.log(person);

// Arrays
let arrayOfColors = ['red','blue'];
arrayOfColors[2] = 'green';

console.log(arrayOfColors);

// Functions
function greet(name, lastName){
  console.log(`Hello ${name} ${lastName}`);
}
greet('Timmy', "Smith");

function square(number){
  return number * number;
}
let number = square(2);
console.log(number);

// Conditional Statement
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

// Loops
/* log odd number from 1 to 5 */

// for
for (let i = 0; i <= 5; i++){
  if(i%2 !== 0) console.log(i);
}

// while
let i = 0;
while (i <= 5){
  if(i % 2 !== 0) console.log(i);
  i++; // req. to avoid infinite
}

// do-while (statement runs at least once)
let j = 9;
do {
  if( j % 2 !== 0) console.log(j);
  j++; // req. to avoid infinite
} while (j <= 5);

// for-in (iteration of object properties)
const myBio = {
  name: "Dannee",
  age: 27,
}
for (let key in myBio){
  console.log(key, myBio[key]);
}

const colors = ['red', 'green', 'blue'];
for (let index in colors){
  console.log(index, colors[index]);
}

// for-of(iterate arrays)
for (let color of colors){
  console.log(color);
}

// break & continue
let k = 0;
while (k <= 10){
  if (k === 5) break;
  if(k % 2 === 0){
    k++;
    continue;
  }
  console.log(k);
  k++;
}



