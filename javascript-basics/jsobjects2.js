// Enumerating Properties of an Object
const circle = {
  radius: 1,
  a: "hello",
  draw(){ console.log('hi'); }
}
// Object.keys(circle) => ['radius', 'draw']
// Objects.entries(circle) => ['radius', 1], ['draw', fx]

for (let key in circle){
  console.log(key, circle[key]);
}

for (let key of Object.keys(circle)){
  console.log(key, circle[key]);
} 

for (let entry of Object.entries(circle)){
  console.log(entry);
} 

('radius' in circle) ? console.log('yes') : console.log('no');

// const string = 'abcdefg';
// for (let char in string){
//   console.log(char, string[char]); 
// }
// for(let key of Object.keys(string)){
//   console.log(key, string[key]); 
// }


// Cloning an Object
const circle = {
  radius: 1,
  draw(){
    console.log('draw')
  }
}

// old clone method
const clone = {};
for(let key in circle){
  clone[key] = circle[key];
}
console.log(clone);

// new clone method
const clone2 = Object.assign({}, circle);
console.log(clone2);

// spread clone method
const clone3 = {...clone2};
console.log(clone3);



