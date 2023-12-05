const fs = require("fs");
let arr = fs
  .readFileSync("input.txt")
  .toString()
  .split("A")
  .join("1")
  .split("B")
  .join("2")
  .split("C")
  .join("3")
  .split("\n");
let brr = arr.map((el) => {
  return el
    .split("X")
    .join("-1")
    .split("Y")
    .join("0")
    .split("Z")
    .join("1")
    .split(" ");
});
let soma = 0;
let a = brr.map((ele) => {
  if (parseInt(ele[1], 10) == 1) {
    if (parseInt(ele[0], 10) == 1 || parseInt(ele[0], 10) == 2) {
      soma = soma + parseInt(ele[0], 10) + 1;
    } else {
      soma++;
    }
    soma += 6;
  } else if (parseInt(ele[1], 10) == 0) {
    soma += 3 + parseInt(ele[0]);
  } else {
    if (ele[0] == 1) {
      soma += 3;
    } else {
      soma += ele[0] - 1;
    }
  }

  console.log(soma);
  return "";
});
console.log(soma);
