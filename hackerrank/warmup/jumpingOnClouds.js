'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  let index = 0;

  do {
    jumps++;
    index = c[index + 2] == 0 ? index + 2 : index + 1;
  } while (index < c.length - 1);

  console.log(jumps);
  return jumps;
}

const clouds = [0, 0, 1, 0, 0, 1, 0];


console.log('min jumps: ', jumpingOnClouds(clouds));

