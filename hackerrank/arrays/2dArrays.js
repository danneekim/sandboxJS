/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function hourglassSum(arr) {
  // Write your code here

  let arrOfSums = [];

  for (let x = 0; x < arr.length - 2; x++) {

    for (let y = 0; y < arr.length - 2; y++) {

      let sum =
        arr[x][y] + arr[x][y + 1] + arr[x][y + 2]
        + arr[x + 1][y + 1]
        + arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];

      arrOfSums.push(sum);
    }
  }

  return Math.max(...arrOfSums);
}

const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const expectedOutput = 28;

console.log('max hourglass sum: ', hourglassSum(arr));