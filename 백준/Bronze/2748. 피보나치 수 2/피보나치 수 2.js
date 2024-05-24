const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

list = [0, 1];

for (let i = 2; i < n + 1; i++) {
  list[i] = BigInt(list[i - 1]) + BigInt(list[i - 2]);
}

console.log(list[n].toString());
