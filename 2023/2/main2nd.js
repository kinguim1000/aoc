const fs = require("fs");
let list = fs.readFileSync("input.txt", "utf8").split("\r\n");
let jogo;
let flag = false;
let sum = 0;
let minR = 0;
let minG = 0;
let minB = 0;
for (i of list) {
  i = i.split("Game ").join("");
  i = i.split(": "); // -> 0 = numero do jogo
  jogo = i[1].split("; ");

  //console.log(i[0]);
  for (j of jogo) {
    for (k of j.split(", ")) {
      console.log(k.split(" ")[1]);
      switch (k.split(" ")[1]) {
        case "red":
          console.log(parseInt(k.split(" ")[0]));
          if (parseInt(k.split(" ")[0]) > minR) {
            minR = parseInt(k.split(" ")[0]);
            console.log("a");
          }

          break;
        case "green":
          if (parseInt(k.split(" ")[0]) > minG) {
            minG = parseInt(k.split(" ")[0]);
          }
          break;
        case "blue":
          if (parseInt(k.split(" ")[0]) > minB) {
            minB = parseInt(k.split(" ")[0]);
          }
          break;
      }
    }
  }
  console.log(minR, minG, minB);
  sum += minR * minG * minB;
  minR = 0;
  minG = 0;
  minB = 0;
}

console.log("soma", sum);
