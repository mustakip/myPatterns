const justifyFilledLine = function(numberOfStars,width,symbol1) {
  let line = "";
  let blankPosition = (width - numberOfStars)/2;
  for(let mark = 1; mark <=width; mark++) {
    let symbol = symbol1;
    if(mark <= blankPosition || mark > (width - blankPosition)) {
      symbol = " ";
    }
    line += symbol;
  }
  return line;
}

exports.justifyFilledLine = justifyFilledLine;
//-------------------------------------------------------------------------------------//
const makeHollowLine = function(width,symbol1,symbol2) {
  let hollowLine = "";
  if(width > 1) {
    let spaces = repeatSymbol(" ",width - 2);
    return symbol1+spaces+symbol2;
  }
  return "*";
}

exports.makeHollowLine = makeHollowLine;
//-------------------------------------------------------------------------------------//

const justifyHollowLine = function(numberOfStars,width,leftSymbol,rightSymbol) {
  let noOfSpaces = (width - numberOfStars)/2;
  let sideSpaces = repeatSymbol(" ",noOfSpaces)
  let hollowLine = makeHollowLine(numberOfStars,leftSymbol,rightSymbol);
  let justifiedLine = sideSpaces+hollowLine+sideSpaces;
  return justifiedLine;
}

exports.justifyHollowLine = justifyHollowLine;
//-------------------------------------------------------------------------------------//

const repeatSymbol = function(symbol,width) {
  let symbolLine = "";
  for(let index = 0; index < width; index++) {
    symbolLine = symbolLine+symbol;
  }
  return symbolLine;
}

exports.repeatSymbol = repeatSymbol;
//-------------------------------------------------------------------------------------//

const makeFilledLine = function(type,height,line) {
  linePattern = "";
  let symbols = repeatSymbol("*",line);
  let spaces = repeatSymbol(" ",height-line);
  switch(type) {
    case "right" :
      linePattern = linePattern+spaces+symbols;
      break;
    case "left" :
      linePattern = symbols+spaces+linePattern;
      break;
  }
  return linePattern;
}

exports.makeFilledLine = makeFilledLine;
//-------------------------------------------------------------------------------------------//
const extractTriangleArgs = function(inputArray) {
  let triangleType = inputArray[2];
  let height = inputArray[3];
  return {triangleType,height};
}

exports.extractTriangleArgs = extractTriangleArgs;
//--------------------------------------------------------------------------------------------//
const extractRectangleArgs = function(inputArray) {
  let rectangleType = inputArray[2];
  let width = inputArray[3]; 
  let height = inputArray[4];
  return {rectangleType,width,height};
}

exports.extractRectangleArgs = extractRectangleArgs;
//--------------------------------------------------------------------------------------------//
const extractDiamondArgs = function(inputArray) {
  let diamondType = inputArray[2];
  let width = inputArray[3];
  return {diamondType,width};
}

exports.extractDiamondArgs = extractDiamondArgs;
