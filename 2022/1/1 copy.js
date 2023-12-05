console.log(
  require("fs")
    .readFileSync("input.txt")
    .toString()
    .split("\n\n")
    .map((el) => {
      let brr = el
        .split("\n")
        .map((str) => parseInt(str, 10))
        .reduce((acumulador, current) => acumulador + current, 0);
      return brr;
    })
    .sort((a, b) => b - a)[0]
);
