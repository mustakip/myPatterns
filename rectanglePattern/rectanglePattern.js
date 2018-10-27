let {createFilledRectangle,createEmptyRectangle,createAlternateRectangle} = require("./rectangle_library.js");

const main = function() {
  let designType = process.argv[2];
  let width = process.argv[3];
  let height = process.argv[4];

  if(designType == "alternating") {
    console.log((createAlternateRectangle(width,height).join("\n")));
  }

  if(designType == "empty") {
    console.log((createEmptyRectangle(width,height).join("\n")));
  }

  if(designType == "filled") {
    console.log(createFilledRectangle(width,height));
  }
}

main();
