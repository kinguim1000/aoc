const fs = require("fs");
let lines = fs.readFileSync("input.txt").toString().split("\n\n");
let final = lines.map((el) => {
  let brr = el.split("\n").map((str) => parseInt(str, 10));
  let sum = brr.reduce((acumulador, current) => acumulador + current, 0);

  return sum;
});
final.sort((a, b) => b - a);
// const max = final.reduce(
//   (acc, cur) => (cur > acc ? cur : acc),
//   Number.MIN_SAFE_INTEGER
// );
console.log(final[0] + final[1] + final[2]);
