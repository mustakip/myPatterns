
const createStarMark = function(numberOfStars,width) {
  let line = "";
  let blankPosition = (width - numberOfStars)/2;
  for(let mark = 1; mark <=width; mark++) {
    let symbol = "*";
    if(mark <= blankPosition || mark > (width - blankPosition)) {
      symbol = " ";
    }
    line += symbol;
  }
  return line;
}
exports.createStarMark = createStarMark;

const createHollowMark = function(numberOfStars,width) {
  let line = "";
  let markPosition = (width - numberOfStars)/2;
  for(let mark = 1; mark <= width; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) || mark == (width - markPosition)) {
      symbol = "*";
    }
    line += symbol;
  }
  return line;
}
exports.createHollowMark = createHollowMark;

const createUpperSlash = function(numberOfStars,width) {
  let line = "";
  let markPosition = (width - numberOfStars)/2;
  for(let mark = 1; mark <= width; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) && numberOfStars != 1) {
      symbol = "/";
    }
    if(mark == (width-markPosition) && numberOfStars != width) {
      symbol = "\\";
    }
    line += symbol;
  }
  return line;
}
exports.createUpperSlash = createUpperSlash;

const createlowerSlash = function(numberOfStars,width) {
  let line = "";
  let markPosition = (width - numberOfStars)/2;
  for(let mark = 1; mark <= width; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) && numberOfStars != 1) {
      symbol = "\\";
    }
    if(mark == width - markPosition) {
      symbol = "/";
    }
    line += symbol;
  }
  return line;
}
exports.createlowerSlash = createlowerSlash;
//-------------------------------------------------------------------------------------------//
const generateHollowLine = function(edgeSymbol,length) {
  let hollowLineArray = [];
  hollowLineArray.push(edgeSymbol);
  for(let index = 1; index < length-1; index++) {
    hollowLineArray[index] = " "; 
  }
  hollowLineArray.push(edgeSymbol)
  return hollowLineArray;
}
exports.generateHollowLine = generateHollowLine;

const repeatSymbol = function(symbol,width) {
  let symbolLine = "";
  for(let index = 0; index < width; index++) {
    symbolLine = symbolLine+symbol;
  }
  return symbolLine;
}
exports.repeatSymbol = repeatSymbol;
//------------------------------------------------------------------------------------------//
const generateStarMark = function(height,line) {
  linePattern = "";
  for(mark = 1; mark <= height ; mark++) {
    symbol = "*";
    if(mark <= (height - line)) {
      symbol = " ";
    }
    if(type == "right") {
      linePattern = linePattern+symbol;
    } 
    if(type == "left") {
      linePattern = symbol+linePattern;
    }
  }
  return linePattern;
}
exports.generateStarMark = generateStarMark;
