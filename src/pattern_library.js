let util = require("./pattern_util.js");
let {justifyFilledLine,repeatSymbol,makeFilledLine} = util;
let {justifyHollowLine,createStarMark} = util;

const createAngledDiamond = function(width) {
  let delimiter = "";
  let pattern = "";
  if(width > 0){
  pattern += delimiter+justifyFilledLine(1,width,"*");
  }
  delimiter = "\n";
  for(let numberOfStars = 3; numberOfStars < width; numberOfStars+= 2) {
    pattern += delimiter+justifyHollowLine(numberOfStars,width,"/","\\");
  }
  if(width > 2){
  pattern += delimiter+justifyHollowLine(width,width,"*","*");
  }
  for(let numberOfStars = width -2;numberOfStars > 1;numberOfStars-=2){
    pattern += delimiter+justifyHollowLine(numberOfStars,width,"\\","/");
  }
  if(width > 1) {
  pattern += delimiter+justifyFilledLine(1,width,"*");
  }
  return pattern;
}

const generateDiamond = function(diamondType,width) {
  let delimiter = "";
  let pattern = "";
  let typeOfDiamond;
  for(let numberOfStars = 1; numberOfStars <=width; numberOfStars+= 2) {
    typeOfDiamond = justifyHollowLine(numberOfStars,width,"*","*");
    if(diamondType == "filled") {
      typeOfDiamond = justifyFilledLine(numberOfStars,width,"*");
    }
    pattern += delimiter+typeOfDiamond;
    delimiter = "\n";
  }
  for(let numberOfStars = width - 2;numberOfStars > 0;numberOfStars-=2){
    typeOfDiamond = justifyHollowLine(numberOfStars,width,"*","*");
    if(diamondType == "filled") {
      typeOfDiamond = justifyFilledLine(numberOfStars,width,"*");
    }
    pattern += delimiter+typeOfDiamond;
  }
  return pattern;
}

const createDiamond = function(inputArguments) {
  let {diamondType,width} = inputArguments;
  let diamondPattern;
  let filled = generateDiamond("filled",width);
  let hollow = generateDiamond("hollow",width);
  let angled = createAngledDiamond(width);
  let patterns = {filled,hollow,angled};
  return patterns[diamondType];
}

//-----------------------------------------------------------------------------------------------------------------------------//

const createFilledRectangle = function(width,height) {
  let filledRectangleArray = [];
  for(let line = 0; line < height; line++) {
    filledRectangleArray[line]  = repeatSymbol("*",width)
  }
  return filledRectangleArray.join("\n");
}

const createEmptyRectangle = function(width,height) {
  let emptyRectangleArray = [];
  if(height >= 1) { 
    emptyRectangleArray[0] = repeatSymbol("*",width);
  }
  for(let line = 1; line <= (height-2); line++) {
    emptyRectangleArray[line] = justifyHollowLine(width,width,"*","*") 
  }
  if(height >= 2){
    emptyRectangleArray.push(repeatSymbol("*",width));
  } 
  return (emptyRectangleArray.join("\n"));
}

const createAlternateRectangle = function(width,height) {
  let pattern = [];
  for(let line = 0; line < height; line++) {
    pattern[line] = repeatSymbol("-",width);
    if(line % 2 == 0) {
      pattern[line] = repeatSymbol("*",width)
    }
  }
  return pattern.join("\n");
}

const createRectangle = function(inputArguments) {
  let {rectangleType,width,height} = inputArguments;
  let filled = createFilledRectangle(width,height);
  let empty = createEmptyRectangle(width,height);
  let alternating = createAlternateRectangle(width,height);
  let patterns = {filled,empty,alternating};
  return patterns[rectangleType];
}

//-----------------------------------------------------------------------------------------------------------------------//

const createTriangle = function(inputArguments) {
  let {triangleType,height} = inputArguments;
  let patterns = "";
  let delimiter = "";
  for(line = 1; line <= height; line++){
    patterns = patterns+delimiter+makeFilledLine(triangleType,height,line);
    delimiter = "\n";
  }
  return patterns;
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
