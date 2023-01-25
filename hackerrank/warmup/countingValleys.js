function countingValleys(steps, path) {
  // Write your code here

  let seaLevel = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {

    if (path[i] == 'D') {
      seaLevel--;
    } else {
      if (seaLevel == -1) {
        valleys++;
      }
      seaLevel++;
    }
  }

  return valleys;
}

const steps = 8;
const path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];

const expectedOutput = 1;

// _/\      _
//    \    /
//     \/\/

console.log('valleys:', countingValleys(steps, path));