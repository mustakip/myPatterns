const createDiamond = require("./src/pattern_library.js").createDiamond;
const extractDiamondArgs = require("./src/pattern_util.js").extractDiamondArgs;

const main = function() {
  let inputArguments = extractDiamondArgs(process.argv);
  console.log(createDiamond(inputArguments));
}

main();

