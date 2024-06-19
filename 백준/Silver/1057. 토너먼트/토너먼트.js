const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, K, I] = input.map(Number);

let list = Array.from({ length: N }, (_, i) => i + 1);
let count = 1;
let isEnd = false;

while (list.length > 1) {
  let nextRound = [];

  for (let i = 0; i < list.length; i += 2) {
    const a = list[i];
    const b = list[i + 1];

    if ((a === K && b === I) || (a === I && b === K)) {
      console.log(count);
      isEnd = true;
      break;
    }

    if (a === K || a === I) {
      nextRound.push(a);
    } else {
      nextRound.push(b);
    }
  }

  if (isEnd) break;

  list = nextRound;
  count += 1;
}

if (!isEnd) console.log(-1);
