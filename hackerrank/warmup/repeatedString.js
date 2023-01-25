function repeatedString(s, n) {
  // Write your code here

  let count = 0;
  let strLength = s.length;

  for (let char of s) {
    if (char == 'a') count++;
  }

  count *= Math.floor(n / strLength);

  for (let ind = 0; ind < (n % strLength); ind++) {
    if (s[ind] === 'a') count++;
  }

  return count;


}


const str = "aba";
const n = 10;

const expectedOutput = 7;

console.log('repeated a: ', repeatedString(str, n));




