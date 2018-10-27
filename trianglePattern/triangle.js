const generateTriangle = require("./triangle_functions_library.js").generateTriangle;

const main = function() {
  type = process.argv[2];
  height = process.argv[3];
  console.log(generateTriangle(type,height));
}

main();
