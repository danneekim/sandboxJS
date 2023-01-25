/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
  // Write your code here

  let rotatedArr = ["A", "B", "C"];

  let hashMap = {};

  rotatedArr.forEach((item, index) => {
    hashMap[index] = item;
  })

  // for (let i = 0; i < a.length; i++) {
  //   if (i === d) rotatedArr.push(a[i]);
  // }

  // for (let i = 0; i < d; i++) {
  //   rotatedArr.push(a[i]);
  // }

  return hashMap;
}

const a = [1, 2, 3, 4, 5]
const d = 4;

// const expectedOutput = [5, 1, 2, 3, 4];

console.log('rotLeft: ', rotLeft(a, d));