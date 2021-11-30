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


/** Primitive vs References Types
 * Primitive Types:
 ** are independent & copied by the value. 
 *** [ Number, String, Boolean, Symbol, undefined, null ]

 * Reference Types = Object, Function, Arrays
 ** are dependent & copied by their reference obj in memory.
 *** [ Objects, Functions, Arrays ] 
*/

// a !== b (primitive)
let a = 10;
let b  = a;
a = 20;

// c === d (reference)
let c = {value:10};
let d = c;
c.value = 20;

// ie-
let number = {value: 10};
function increase(obj){
  obj.value++;
}
console.log(increase(number));

// Objects
let person = {}
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

