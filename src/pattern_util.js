const justifyFilledLine = function(lengthOfSymbols,width,symbol) {
  let noOfSpaces = (width - lengthOfSymbols)/2;
  let spaces = repeatSpaces(noOfSpaces);
  let symbols = repeatSymbol(symbol)(lengthOfSymbols);
  let line = spaces+symbols+spaces;
  return line;
}

exports.justifyFilledLine = justifyFilledLine;
//-------------------------------------------------------------------------------------//
const justifyHollowLine = function(numberOfStars,width,leftSymbol,rightSymbol) {
  let noOfSpaces = (width - numberOfStars)/2;
  let sideSpaces = repeatSpaces(noOfSpaces)
  let hollowLine = makeHollowLine(numberOfStars,leftSymbol,rightSymbol);
  let justifiedLine = sideSpaces+hollowLine+sideSpaces;
  return justifiedLine;
}

exports.justifyHollowLine = justifyHollowLine;
//-------------------------------------------------------------------------------------//
const makeHollowLine = function(width,symbol1,symbol2) {
  let hollowLine = "";
  if(width > 1) {
    let spaces = repeatSpaces(width - 2);
    return symbol1+spaces+symbol2;
  }
  return symbol1;
}

exports.makeHollowLine = makeHollowLine;
//-------------------------------------------------------------------------------------//

const repeatSymbol = function(symbol) {
  return function(width) {
    return symbol.repeat(width); 
  }
}

exports.repeatSymbol = repeatSymbol;
//-------------------------------------------------------------------------------------//

const makeLineForTriangle = function(type,height,line) {
  let symbols = repeatStars(line);
  let spaces = repeatSpaces(height-line);
  let right = spaces+symbols;
  let left = symbols+spaces;
  let triangleType = {right,left};
  return triangleType[type];
}

exports.makeLineForTriangle = makeLineForTriangle;
//-------------------------------------------------------------------------------------------//
const extractRectangleArgs = function(inputArray) {
  let rectangleType = inputArray[2];
  let width = +inputArray[3]; 
  let height = +inputArray[4];
  return {rectangleType,width,height};
}

exports.extractRectangleArgs = extractRectangleArgs;
//--------------------------------------------------------------------------------------------//
const extractArgs = function(inputArray) {
  let patternType = inputArray[2];
  let height = +inputArray[3];
  return {patternType,height};
}

exports.extractArgs = extractArgs;
//------------------------------------------------------------------------------------//
const repeatStars = repeatSymbol("*");

exports.repeatStars = repeatStars;
//------------------------------------------------------------------------------------//
const repeatSpaces = repeatSymbol(" ");

exports.repeatSpaces = repeatSpaces;
//------------------------------------------------------------------------------------//

const repeatDashes = repeatSymbol("-");

exports.repeatDashes = repeatDashes;


