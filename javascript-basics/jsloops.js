// Loops
// for loop
for (let i = 0; i <= 5; i++){
  if(i%2 !== 0) console.log(i);
}

// while loop
let i = 0;
while (i <= 5){
  if(i % 2 !== 0) console.log(i);
  i++; // req. to avoid infinite
}

// do-while loop (statement runs at least once)
let j = 9;
do {
  if( j % 2 !== 0) console.log(j);
  j++; // req. to avoid infinite
} while (j <= 5);

// for-in loop (iteration of object properties)
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

// for-of loop (iterate arrays)
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







