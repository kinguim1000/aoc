const fs = require("fs");
let list = fs.readFileSync("input.txt").toString().split("\n");
let item = list.map((el) => el.split(","));
console.log(item[0]);
let element = item.map((ele) => ele.map((el) => el.split("-")));
console.log(element[0]);
let sum = 0;
element.map((el) => {
  console.log(el[0][0]);
  if (
    parseInt(el[0][0]) == parseInt(el[1][0]) ||
    parseInt(el[0][1]) == parseInt(el[1][1]) ||
    parseInt(el[0][0]) == parseInt(el[1][1]) ||
    parseInt(el[0][1]) == parseInt(el[1][0])
  ) {
    console.log("1");
    sum++;
    return;
  }
  if (parseInt(el[0][0]) > parseInt(el[1][0])) {
    if (parseInt(el[0][0]) <= parseInt(el[1][1])) {
      console.log("2");
      sum++;
      return;
    }
  }
  if (parseInt(el[0][0]) < parseInt(el[1][0])) {
    if (parseInt(el[0][0]) >= parseInt(el[1][1])) {
      console.log("2");
      sum++;
      return;
    }
  }
  if (parseInt(el[0][1]) < parseInt(el[1][0])) {
    if (parseInt(el[0][1]) >= parseInt(el[1][1])) {
      console.log("3");
      sum++;
      return;
    }
  }
  if (parseInt(el[0][1]) > parseInt(el[1][0])) {
    if (parseInt(el[0][1]) <= parseInt(el[1][1])) {
      console.log("3");
      sum++;
      return;
    }
  }
  if (parseInt(el[1][0]) > parseInt(el[0][0])) {
    if (parseInt(el[1][0]) <= parseInt(el[0][1])) {
      console.log("2");
      sum++;
      return;
    }
  }
  if (parseInt(el[1][0]) < parseInt(el[0][0])) {
    if (parseInt(el[1][0]) >= parseInt(el[0][1])) {
      console.log("2");
      sum++;
      return;
    }
  }
  if (parseInt(el[1][1]) < parseInt(el[0][0])) {
    if (parseInt(el[1][1]) >= parseInt(el[0][1])) {
      console.log("3");
      sum++;
      return;
    }
  }
  if (parseInt(el[1][1]) > parseInt(el[0][0])) {
    if (parseInt(el[1][1]) <= parseInt(el[0][1])) {
      console.log("3");
      sum++;
      return;
    }
  }
});
console.log(sum);
