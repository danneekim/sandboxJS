// const [] contents can be modified BUT not reassigned.
// ie - addNumbers = {};

console.log('ADDING Elements');
/**Adding Elements
 * arr.push(el) - add elements to end
 * arr.unshift(el) - add elements to beginning
 * arr.splice(index, 0-1, value) - add elements w/ value at Index 
 ** (0) - inserts / (1) - removes
 */
const addNumbers = [3, 4];
addNumbers.push(5,6); //[3, 4, 5, 6]
addNumbers.unshift(1,2); //[1, 2, 3, 4, 5, 6]
addNumbers.splice(3, 0, 3.5,); //[1, 2, 3, 3.5, 4, 5, 6]
console.log(addNumbers);

console.log('REMOVING Elements')
/**Removing Elements
 * arr.pop(); - removes element from end
 * arr.shift(); - removes element from beginning
 * arr.splice(index, 0-1, ); - removes elements at index
 ** (>1) - removes >1 elements  
 */
const removeNums = [1,2,3,4];
removeNums.pop(); // [1,2,3]
removeNums.shift(); // [2,3]
removeNums.splice(1, 1,); //[2]
console.log(removeNums);

/**Emptying an Array
 **let arr = [1,2,3,4];
 ** 1. arr = [];
 ** 2. arr.length = 0;                  //truncate
 ** 3. arr.splice(0, arr.length)        //splice
 ** 4. while(arr.length > 0) arr.pop(); //loop
*/

console.log('COMBINE/SLICE Arrays');
/**Combining/Slicing Arrays
 * arr3 = arr1.concat(arr2) - returns new array w. combined elements
 * arr3 = [...arr1, ...arr2] - spread syntac
 * arr1.slice(start, end?) - returns new array w. sliced elements
*/
// const first = [1, 2, 3];
const first = [{id: 1,}];
const second = [4, 5, 6];

const combined = first.concat(second);
const sliced = combined.slice(0, 4);
console.log(combined);
console.log(sliced);

const spread = [...first, 'a', ...second, 'b'];
const copy = [...spread];
console.log(spread);
console.log(copy);

/**Iterating Array
 * const iterations = [1, 2, 3];
 ** for(let number of iterations) 
      console.log(number);
 ** for(let index in iterations)
      console.log(iterations[index]);
 ** iterations.forEach((number, index) => {
      console.log(index, number);})
 */

console.log('TESTING Arrays');
/**Testing Element of an Array
 * arr.every((el) => el > 1) - return boolean if every elements pass condition
 * arr.some((el) => el > 1) - return boolean if some elements pass condition
 */
const testNums = [ 1, 2, 3, 4];
const isPositive = testNums.every((val) => val >= 0);
console.log(isPositive);


console.log('JOINING Arrays');
/**Joining Arrays
 * arr.join(',') - returns string of joined array elements
 * str.split(" ") - return array of split string elements
 */
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const msgJoined = parts.join(" ");
console.log(msgJoined);

console.log('SORT Arrays');
/**Sorting Arrays 
 * arr.sort((a,b)) - sorts array based on condition
 * const sortAlphabet = ['a', 'c', 'b', 'd',];
    sortAlphabet.sort();
    console.log(sortAlphabet); // ['a','b','c','d']
 * const sortNumbers = [4,2,3,1];
    sortNumbers.sort();
    console.log(sortNumbers); [1,2,3,4]
 */
const languages = [
  {id: 1, name: "Node.js"},
  {id: 2, name: "javascript"},
  {id: 3, name: "python"}
];

languages.sort((a,b)=> {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if(nameA < nameB) return -1;
  else if(nameA > nameB) return 1;
  return 0;
});
console.log(languages);

console.log('FILTER Arrays');
/**Filtering an Array
 * arr.filter(el => el >= 0) - returns new array with elements that pass condition
 */
const numberArray = [1, -1, 2, 3];
const filtered = numberArray.filter((value) => value >=0);
console.log(filtered);

console.log('MAPPING Arrays');
/**Mapping an Array
 * arr.map(el => ) - return new array with mapped values
 */
const items = filtered.map(n => {
  return obj = {value: n};
});
console.log(items);

console.log('CHAINING Array Methods')
const chain = numberArray
  .filter((value) => value >= 0) // return elements w. value >= 0
  .map(n => ({value: n})) // map values to {value: n}
  .filter(obj => obj.value > 1) // filter elements w. value > 1
  .map(obj => obj.value); // return obj values
console.log(chain);

console.log('REDUCING Arrays');
/**Reducing an Array
 * arr.reduce((total, item) => total+item) - returns single value after reducing array values
 * total = 0, value = 1 => total = 1;
 * total = 1, value = -1 => total = 0;
 * total = 0, value = 2 => total = 2;
 * total = 2, value = 3 => total = 5;
 */
const reduceNums = [1, -1, 2, 3];
// let sum = 0;
// for(let n of reduceNums) sum += n;
// console.log(sum);

const sum = reduceNums.reduce((total, val) => {
  return total + val;
}, 0) // <- initialization of total
console.log(sum);

const reduceArr = [{key: 'foo', value: 'bar'}, {key: "hello", value: "world"}];
const reducedObj = reduceArr.reduce((obj, item) => {
  obj[item.key] = item.value;
  return obj;
}, {}); // <- initialization of object
console.log(reducedObj);

/**Finding Elements
 * Primitive Type:
 ** arr.indexOf(el, fromIndex?) - returns index of element || -1
 ** arr.lastIndexOf(el, fromIndex?) - returns last index of element ||  -1
 ** arr.includes(el) - returns boolean

 * Reference Type:
 ** arr.find(el => el > 12) - returns element || undefined 
 */
const names = ['d','a','n','n','e','e'];
names.indexOf('n'); //2
names.indexOf('n', 3); //3
names.lastIndexOf('e'); //5
names.indexOf('a') !== -1 ; //true 
names.includes('a'); //true

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];
courses.find(course => course.name === 'a'); //{id: 1, name: 'a'}



