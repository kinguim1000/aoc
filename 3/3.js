const fs = require("fs");
let list = fs.readFileSync("input.txt").toString().split("\n");
list = list.map((el) => el.split(""));
let a, b, letter;
let sum = 0;
list.forEach((el) => {
  for (let i = 0; i < el.length / 2 + 1; i++) {
    for (let c = el.length - 1; c > el.length / 2; c--) {
      if (el[i] == el[c]) {
        console.log(el[i]);
        if (el[i] == el[i].toLowerCase()) {
          b = 0;
        } else {
          b = 26;
        }
        letter = el[i].toLowerCase();
        if (letter == "a") sum += 1 + b;
        else if (letter == "b") sum += 2 + b;
        else if (letter == "c") sum += 3 + b;
        else if (letter == "d") sum += 4 + b;
        else if (letter == "e") sum += 5 + b;
        else if (letter == "f") sum += 6 + b;
        else if (letter == "g") sum += 7 + b;
        else if (letter == "h") sum += 8 + b;
        else if (letter == "i") sum += 9 + b;
        else if (letter == "j") sum += 10 + b;
        else if (letter == "k") sum += 11 + b;
        else if (letter == "l") sum += 12 + b;
        else if (letter == "m") sum += 13 + b;
        else if (letter == "n") sum += 14 + b;
        else if (letter == "o") sum += 15 + b;
        else if (letter == "p") sum += 16 + b;
        else if (letter == "q") sum += 17 + b;
        else if (letter == "r") sum += 18 + b;
        else if (letter == "s") sum += 19 + b;
        else if (letter == "t") sum += 20 + b;
        else if (letter == "u") sum += 21 + b;
        else if (letter == "v") sum += 22 + b;
        else if (letter == "w") sum += 23 + b;
        else if (letter == "x") sum += 24 + b;
        else if (letter == "y") sum += 25 + b;
        else if (letter == "z") sum += 26 + b;
        return;
      }
    }
  }
});
console.log(sum);
