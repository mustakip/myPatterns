const createRectangle = require("./src/pattern_library.js").createRectangle;
const extractRectangleArgs = require("./src/pattern_util.js").extractRectangleArgs;

const main = function() {
  let inputArguments = extractRectangleArgs(process.argv);
  console.log(createRectangle(inputArguments));
}

main();
