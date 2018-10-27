const createDiamond = require("./diamond_functions_library.js").createDiamond;
const createAngledDiamond = require("./diamond_functions_library.js").createAngledDiamond;

const main = function() {
  let width = process.argv[3];
  let diamondType = process.argv[2];
  let output;

  if(width % 2 ==0) {
    width -= 1;
  }
  if(diamondType == "hollow" || diamondType == "filled") {
    output = (createDiamond(width));
  }
  if(diamondType == "angled") {
    output = (createAngledDiamond(width));
  }
  console.log(output);
}

main();
