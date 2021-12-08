
/** Function Declaration vs Expressions
 * Declaration: Able to call fxn prior to its syntax
 * Expression: Unable to call fxn prior to its syntax
 * Hoisting: process of moving fxn declarations to top. 
*/

// Function Declaration 
function walk(){ }
// Function Expression
let run1 = function(){} //anonmyous
let run2 = function walk(){} //named

/** Arguments Object (arguments)
 * builtin iterable within JS fxn containing all values of its parameters 
*/
function sum1(a,b){
  let total = 0;
  for(let value of arguments){
    total += value;
  }
  return total;
}
console.log(sum1(1,2,3,4,5));

/** Rest Operator (...args)
  * always last provided fxn param. (ie - "rest of the values")
 */ 
console.log(add(1,2,3,4,5)) //15
console.log(findDiscount(0.1, 50, 50, 100));

function add(...args){
  let total = 0;
  return args.reduce((a,b) => {return a+b}, 0);
}
function findDiscount(discount, ...prices){
  let total = 0;
  let sum = prices.reduce((a,b) => a+b);
  return total = sum * (1 - discount);
}

/** Default Parameters (ES6 ver)
 */
console.log(interestRate(10000));

function interestRate(principal, rate= 3.5, years= 5){
  // rate = rate || 3.5;
  // years = years || 5;
  return principal * rate / 100 * years;
}

/** Getters and Setters
 * getters => access properties
 * setters => change (mutate) them
 */
const person = {
  firstName: 'Dannee',
  lastName: 'Kim',
  get fullName(){
    return console.log(`${person.firstName} ${person.lastName}`);
  },
  set fullName(value) {
    if(typeof value !== 'string') 
      throw new Error('Value not a string');
    
    const parts = value.split(' ');
    if(parts.length !== 2) 
      throw new Error('Enter a first & last name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
// person.fullName()
person.fullName;

/** Try-Catch */
try{
  // person.fullName = true;
  // person.fullName = '';
  person.fullName = 'John Doe';
} catch(e){
  console.error(e);
}
person.fullName;

/** Local vs Global Scope
 * local variables take precedence over global variables
 */
const message = "bye";
function hello(){
  const message = "hi";
  console.log(message);
}
hello();

/** Let vs Var
 * var - scope limited to its functional code block 
 * let - scope limited to its code block
 */
function start(){
  for(var i = 0; i < 5; i++){
    console.log(i);
  }
  console.log(i); 
}

/** The 'this' keyword
 ** this: refers to object thats executing the function
 ** method: refers to its object
 ** function: refers to global object (window/js, global/node)
 */

const video = {
  title: 'title',
  tags: ['a','b','c'],
  showTags(){
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  }
}
video.showTags();

// this references video object
video.stop = function(){
  console.log(this);
}
video.stop();

// this references global window object
function playVideo(){
  console.log(this); 
}
playVideo();

// this - refers to new Video object (iife)
function Video(title){
  this.title = title;
  console.log(this);
}
const v = new Video('b');