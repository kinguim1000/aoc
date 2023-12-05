const fs = require("fs");
let arr = fs
  .readFileSync("input.txt")
  .toString()
  .split("A")
  .join("X")
  .split("B")
  .join("Y")
  .split("C")
  .join("Z")
  .split("\n");
let brr = arr.map((el) => {
  return el
    .split("X")
    .join("1")
    .split("Y")
    .join("2")
    .split("Z")
    .join("3")
    .split(" ");
});
let soma = 0;
let a = brr.map((ele) => {
  if (
    parseInt(ele[1], 10) - parseInt(ele[0], 10) == 1 ||
    parseInt(ele[1], 10) - parseInt(ele[0], 10) == -2
  ) {
    soma += 6;
  } else if (ele[0] == ele[1]) {
    soma += 3;
  }
  soma += parseInt(ele[1]);

  console.log(soma);
  return "";
});
console.log(soma);
