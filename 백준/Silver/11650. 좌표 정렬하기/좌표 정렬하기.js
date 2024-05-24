const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, ...testcase] = input;

const position = testcase.map((v) => v.split(" "));

let answer = "";

position
  .sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .forEach((arr) => {
    answer += `${arr[0]} ${arr[1]}\n`;
  });
console.log(answer);
