const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m, ...testcase] = input.map((line) => line.split(" ").map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);

for (let i = 0; i < m; i++) {
  const [start, end] = testcase[i];
  graph[start].push(end);
  graph[end].push(start);
}

let answer = 0;
visited[1] = true;

const dfs = (start) => {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = true;
      answer++;
      dfs(end);
    }
  }
};

dfs(1);
console.log(answer);
