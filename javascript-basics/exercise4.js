// Ex 1: Array From Range
// Create a function takes two numbers (min, max)
// and return array of all numbers within range

const numbers = arrayFromRange(-1, 4);
console.log(numbers);

function arrayFromRange(min, max){
  let range = [];
  for (let i = min;  i <= max; i++){
    range.push(i);
  }
  return range;
}

// Ex 2: Includes
// Create a function like JS includes
// takes in an array and search element
// return boolean - if search element in array
const ex2 = [1,2,3,4];
console.log(includes(ex2, 1));
function includes(array, element){
  if(array.length === 0 ) return false;
  if(array.indexOf(element) === -1){
    return false;
  }
  return true;

  // for(let item of array)
  //   if(item === element) return true;
  // return false;
}

// Ex 3: Except
// Create a function that takes in an two arrays
// and returns new array of excluded values

const ex3 = [1,2,3,4];
console.log(except(ex3, [1,2]));

function except(array, excluded){
  if(array.length === 0) return [];
  if(excluded.length === 0) return array;
  // let dictionary = {};
  // for(let index in excluded)
  //   dictionary[index] = excluded[index]

  // let output = [];
  // for(let i = 0; i < array.length; i++){
  //   if(dictionary[i] === undefined){      
  //     output.push(array[i]);
  //   } 
  // }

  let output = [];
  for(let element of array)
  if(!excluded.includes(element)){
    output.push(element);
  }

  return output;
};

// Ex 4. Moving an Element
// Move index to offset in array
const ex4 = [1,2,3,4];
const output = move(ex4, 0, 1);

console.log(output);

function move(array, index, offset){
  const position = index + offset;

  if(position>= array.length || position < 0) {
    console.error('Invalid Offset');
    return;
  } 
  let output = [...array];
  let value = output[index];
  output.splice(index, 1);
  output.splice(position, 0, value);
  return output;
}

// Ex 5. Count Occurrences
// return number of times that search element 

const ex5 = [1,2,3,4,1];

const count = countOccurences(ex5, 1);
console.log(count);

function countOccurences(array, searchElement){
  // let instance = 0;
  // for (element of array)
  //   if(element === searchElement) instance++;
  // return instance; 

  let instance = array.reduce((total, item) => {
    if(item === searchElement)
      total++;
    return total; 
  }, 0);
  return instance;

}

// Ex. 6 -Get Max
// return max number of array
// if empty array - return undefined
const ex6 = [1,3,2,4,7,5,9];
const max = getMax(ex6);
console.log(max);

function getMax(array){
  
  if(array.length === 0) return undefined;
  
  // let max = 0;
  // let clone = [...array].sort();
  // let lastIndex = clone.length - 1;
  // max = clone[lastIndex];
  // return max;

  // let max = array[0];
  // for (let i = 1; i < array.length; i++){
  //   if(array[i] > max){
  //     max = array[i];
  //   }
  // }
  // return max;

  return array.reduce((accumulator, current) => {
    if(current > accumulator) return current;
    return accumulator;

    // return (current > accumulator) ? current : accumulator;
  });

  // array.reduce((a,b) => (a>b) ? a: b)
}

// Ex. 7 - Sort Movies
// Get all movies in 2018 w rating > 4
// Sort them by rating
// Descending Order
// Pick their title

const movies = [        
  {title: "a", year: 2018, rating: 4.5},
  {title: "b", year: 2018, rating: 4.7},
  {title: "d", year: 2018, rating: 3},
  {title: "e", year: 2017, rating: 4.5},
];

let movies2018 = [];
movies.forEach((movie, index) => {
  if(movie.year === 2018 && movie.rating >= 4) 
    movies2018.push(movie);  
});
movies2018.sort((a,b) => {
  let ratingA = a.rating;
  let ratingB = b.rating;
  // if a > b return 1
  // if a < b return -1
  // a === b return 0;
  if(ratingA < ratingB) return 1;
  if(ratingA > ratingB) return -1;
  return 0; 
}).forEach(movie => console.log(movie.title));

console.log(movies2018);

let newM = [];
movies
  .filter( m => m.year === 2018 && m.rating >= 4)
  // .sort((a, b) => { 
  //   // a > b return 1;
  //   // a < b return -1;
  //   // a === b return 0;
  //   let ratingA = a.rating;
  //   let ratingB = b.rating;

  //   if(ratingA > ratingB) return 1;
  //   if(ratingA < ratingB) return -1;
  //   return 0;
  // })
  .sort((a,b) => a.rating - b.rating)
  .reverse()
  .map(m =>{ console.log(m.title)})
  // .map((movie) => console.log(movie.title) )










