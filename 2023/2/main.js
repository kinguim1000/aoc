const fs = require("fs");
let list = fs.readFileSync("input.txt", "utf8").split("\r\n");
let jogo;
let flag = false;
let sum = 0;
for (i of list) {
  i = i.split("Game ").join("");
  i = i.split(": "); // -> 0 = numero do jogo
  jogo = i[1].split("; ");

  console.log(i[0]);
  for (j of jogo) {
    for (k of j.split(", ")) {
      //console.log(k.split(" "));
      console.log(aux(parseInt(k.split(" ")[0]), k.split(" ")[1]));
      if (aux(parseInt(k.split(" ")[0]), k.split(" ")[1])) {
        console.log("          ", i[0]);
        sum += parseInt(i[0]);
        flag = true;
        break;
      }
    }
    if (flag) {
      flag = false;
      break;
    }
  }
}
console.log("soma", sum);

function aux(entrada, cor) {
  console.log("cor  ", cor);
  console.log("entrada   ", entrada);
  switch (cor) {
    case "red":
      if (entrada > 12) {
        return true;
      }

      break;
    case "green":
      if (entrada > 13) {
        return true;
      }
      break;
    case "blue":
      if (entrada > 14) {
        return true;
      }
      break;
  }
  return false;
}
