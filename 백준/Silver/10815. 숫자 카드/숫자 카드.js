const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, ...testcase] = input;
const sang = new Set(testcase.shift().split(" "));
const M = testcase.shift();
const card = testcase.shift().split(" ");
const result = [];
for (let e of card) {
  sang.has(e) ? result.push(1) : result.push(0);
}

console.log(result.join(" "));
