// Ex1 - Sum of Arguments
// create a function that returns the sum of all arguments
// ie - sum(1,2,3,4) -> 10
// also should be able to take in array of numbers
// ie - sum([1,2,3,4]) -> 10

function sum(...items){
  let total = 0;
  if(items.length === 1 && Array.isArray(items[0])){
    items = [...items[0]];
  }
  // for(let i =0; i < items.length; i++){
  //   total += items[i];
  // }
  total = items.reduce((total, current) => total + current, 0);
  return total;

  // if(Array.isArray(items)){
  //   let string = items.toString().split(',');
  //   for(let i = 0; i < string.length; i++){
  //     let num = parseInt(string[i]);
  //     total += num;
  //   }
  // } else {
  //   for(let i =0; i < items.length; i++){
  //     total += items[i];
  //   }
  // }
  // return total;
}
console.log(sum(1,2,3,4));
// console.log(sum([1,2,3,4]));

// Ex 2. Area of Circle
// create a Circle object using the object literal syntax {}
// circle.radius = 2;
// circle.area = 2; <- 

const circle = {
  radius: 2,
  get area(){
    let pi = Math.PI;
    let radius = this.radius;
    return pi * Math.pow(radius, 2);
  }
}
console.log(circle.area);


// Ex 3. Error Handling
// add error handling for countOccurences if first param is not an array
const numbers = [1,2,3,4,1,1,];
function countOccurences(array, searchElement){
  let instance = 0;
  if(!Array.isArray(array))
    throw new Error('Not an array');

  for (element of array)
    if(element === searchElement) instance++;
  return instance; 

  // let instance = array.reduce((total, item) => {
  //   if(item === searchElement)
  //     total++;
  //   return total; 
  // }, 0);
  // return instance;
}

try {
  const count = countOccurences(numbers, 1);
  console.log(count);
} catch(e){
  console.log(e);
}