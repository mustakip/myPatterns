let util = require("./pattern_util.js");
let {generateStarMark,repeatSymbol,generateHollowLine} = util;
let {createlowerSlash,createHollowMark,createStarMark} = util;
let {createUpperSlash} = util;

const createAngledDiamond = function(width) {
  let delimiter = "";
  let pattern = "";
  if(width > 0){
  pattern += delimiter+createStarMark(1,width);
  }
  delimiter = "\n";
  for(let numberOfStars = 3; numberOfStars < width; numberOfStars+= 2) {
    pattern += delimiter+createUpperSlash(numberOfStars,width);
  }
  if(width > 2){
  pattern += delimiter+createHollowMark(width,width);
  }
  for(let numberOfStars = width -2;numberOfStars > 1;numberOfStars-=2){
    pattern += delimiter+createlowerSlash(numberOfStars,width);
  }
  if(width > 1) {
  pattern += delimiter+createStarMark(1,width);
  }
  return pattern;
}

const generateDiamond = function(diamondType,width) {
  let delimiter = "";
  let pattern = "";
  let typeOfDiamond;
  for(let numberOfStars = 1; numberOfStars <=width; numberOfStars+= 2) {
    typeOfDiamond = createHollowMark(numberOfStars,width);
    if(diamondType == "filled") {
      typeOfDiamond = createStarMark(numberOfStars,width);
    }
    pattern += delimiter+typeOfDiamond;
    delimiter = "\n";
  }
  for(let numberOfStars = width - 2;numberOfStars > 0;numberOfStars-=2){
    typeOfDiamond = createHollowMark(numberOfStars,width);
    if(diamondType == "filled") {
      typeOfDiamond = createStarMark(numberOfStars,width);
    }
    pattern += delimiter+typeOfDiamond;
  }
  return pattern;
}

const createDiamond = function(diamondType,width) {
  let diamondPattern;
  if(width % 2 ==0) {
    width -= 1;
  }
  if(diamondType == "hollow" || diamondType == "filled") {
    diamondPattern = (generateDiamond(diamondType,width));
  }
  if(diamondType == "angled") {
    diamondPattern = (createAngledDiamond(width));
  }
  return diamondPattern;
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
    emptyRectangleArray[line] = generateHollowLine("*",width).join("");
  }
  if(height >= 2){
    emptyRectangleArray.push(repeatSymbol("*",width));
  } return emptyRectangleArray;
}

const createAlternateRectangle = function(width,height) {
  let pattern = [];
  for(let line = 0; line < height; line++) {
    pattern[line] = repeatSymbol("-",width);
    if(line % 2 == 0) {
      pattern[line] = repeatSymbol("*",width)
    }
  }
  return pattern;
}

const createRectangle = function(rectangleType,width,height) {
  let rectanglePattern;
  if(rectangleType == "alternating") {
    rectanglePattern = createAlternateRectangle(width,height).join("\n");
  }

  if(rectangleType == "empty") {
    rectanglePattern = createEmptyRectangle(width,height).join("\n");
  }

  if(rectangleType == "filled") {
    rectanglePattern = createFilledRectangle(width,height);
  }
  return rectanglePattern;
}

//-----------------------------------------------------------------------------------------------------------------------//

const createTriangle = function(type,height) {
  let patterns = "";
  let delimiter = "";
  for(line = 1; line <= height; line++){
    patterns = patterns+delimiter+generateStarMark(type,height,line);
    delimiter = "\n";
  }
  return patterns;
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
