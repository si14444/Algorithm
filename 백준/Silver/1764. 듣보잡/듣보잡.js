const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [NM, ...testcase] = input;
const [N, M] = NM.split(" ").map(Number);

let countMap = new Map();
let answer = "";

for (let i = 0; i < N + M; i++) {
  let name = testcase[i];
  countMap.set(name, (countMap.get(name) || 0) + 1);
}

let duplicates = [];
for (let [name, count] of countMap.entries()) {
  if (count > 1) {
    duplicates.push(name);
  }
}

duplicates.sort();

console.log(duplicates.length);
for (let name of duplicates) {
  answer += `${name}\n`;
}
console.log(answer.trim());
