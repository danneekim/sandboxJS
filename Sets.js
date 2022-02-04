const myArr = [1, 2, 3, 4, 5, 5, 5];
const mySet = new Set(myArr);

// JavaScript Sets:
// Usecase: Set can be used to remove duplicate values of an array
// Set is a pool of unique elements since its unordered
// methods: .add(), .delete(), .clear(), .has(), .size

// add
mySet.add(6);
// mySet.add("6");
// mySet.add({ channelName: "JavaScript Mastery" });
// mySet.add([1, 1, 1]);

// delete
mySet.delete(3);

// has
// console.log(mySet.has(5));

// size
// console.log(mySet.size);

// clear
// mySet.clear();

// JavaScript Map
// holds key-value pairs & remembers the original insertion value of the keys
// searchs by key values
// methods: .set.(key,value), .delete(), .clear(), .has(), .size

const myObject = {};
const a = {};
const b = {};

myObject[a] = "a";
myObject[b] = "b";
// console.log(myObject);

const myMap = new Map([
  [a, "a"],
  [b, "b"],
]);

myMap.set(1, "c");
myMap.delete(1);
console.log(myMap.has(1));
myMap.clear();
console.log(myMap);
