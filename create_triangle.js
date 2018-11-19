const createTriangle = require("./src/pattern_library.js").createTriangle;
const extractArgs = require("./src/pattern_util.js").extractArgs;

const main = function() {
  let inputArguments = extractArgs(process.argv);
  console.log(createTriangle(inputArguments));
}

main();
