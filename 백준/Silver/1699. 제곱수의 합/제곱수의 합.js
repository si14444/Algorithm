const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

let dp = Array.from({ length: n + 1 }, (_, i) => i);

for (let i = 0; i < n + 1; i++) {
  for (let j = 0; j < i; j++) {
    if (i < j * j) {
      break;
    }
    if (dp[i] > dp[i - j * j] + 1) {
      dp[i] = dp[i - j * j] + 1;
    }
  }
}
console.log(dp[n]);
