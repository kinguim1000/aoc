const fs = require("fs");
let list = fs.readFileSync("input.txt", "utf8").split("\r\n");
let som = 0;
for (i of list) {
  i = i.replaceAll("one", "o1e");
  i = i.replaceAll("two", "t2o");
  i = i.replaceAll("three", "t3e");
  i = i.replaceAll("four", "f4r");
  i = i.replaceAll("five", "f5e");
  i = i.replaceAll("six", "s6x");
  i = i.replaceAll("seven", "s7n");
  i = i.replaceAll("eight", "e8t");
  i = i.replaceAll("nine", "n9e");
  i = i.split("");
  for (let j = 0; j < i.length; j++) {
    if (!isNaN(parseInt(i[j]))) {
      som += parseInt(i[j]) * 10;

      break;
    }
  }
  for (let j = i.length - 1; j >= 0; j--) {
    if (!isNaN(parseInt(i[j]))) {
      som += parseInt(i[j]);

      break;
    }
  }
}
console.log(som);
