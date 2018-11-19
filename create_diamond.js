const createDiamond = require("./src/pattern_library.js").createDiamond;
const extractArgs = require("./src/pattern_util.js").extractArgs;

const main = function() {
  let inputArguments = extractArgs(process.argv);
  console.log(createDiamond(inputArguments));
}

main();

