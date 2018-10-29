const createTriangle = require("./src/pattern_library.js").createTriangle;
const extractTriangleArgs = require("./src/pattern_util.js").extractTriangleArgs;

const main = function() {
  let inputArguments = extractTriangleArgs(process.argv);
  console.log(createTriangle(inputArguments));
}

main();
