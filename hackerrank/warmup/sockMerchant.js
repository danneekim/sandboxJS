function sockMerchant(n, ar) {
  // Write your code here

  let hash = {};
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    let color = ar[i];
    if (hash[color]) hash[color]++;
    else hash[color] = 1;
  }

  for (let sock in hash) {
    let pair = Math.floor(hash[sock] / 2);
    pairs += pair;
  }

  return pairs;

}

const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];

const expectedOutput = 2;

console.log('Pairs counted: ', sockMerchant(n, ar));

