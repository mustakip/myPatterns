const createRectangle = require("./src/rectangle_library.js").createRectangle;

const main = function() {
  let rectangleType = process.argv[2];
  let width = process.argv[3];
  let height = process.argv[4];
  console.log(createRectangle(rectangleType,width,height));
}

main();
