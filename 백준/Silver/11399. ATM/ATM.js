const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, ...testcase] = input;

let list = testcase[0].split(" ").map(Number);
list.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    answer += list[j];
  }
}
console.log(answer);
