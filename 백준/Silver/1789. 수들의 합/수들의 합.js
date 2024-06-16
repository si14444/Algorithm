const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const S = Number(input);

let count = 0;
let n = 1;
let sum = 0;

while (sum + n <= S) {
  sum += n;
  count++;
  n++;
}

console.log(count);
