const fs = require("fs");
list = fs
  .readFileSync("input.txt")
  .toString()
  .split("(")
  .join(1)
  .split(")")
  .join(0)
  .split("")
  .sort((a, b) => a - b);
let a, b;
for (let a = 0; a < list.length; a++) {
  if (list[a] != list[list.length - 1 - a]) {
    a = list.pop();
    b = list.shift();
  }
}
console.log(list.length);
