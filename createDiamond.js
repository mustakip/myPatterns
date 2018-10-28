const createDiamond = require("./src/pattern_library.js").createDiamond;

const main = function() {
  let width = process.argv[3];
  let diamondType = process.argv[2];
  console.log(createDiamond(diamondType,width));
}

main();

