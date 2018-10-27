const generateHollowLine = function(edgeSymbol,length) {
  let hollowLineArray = [];
  hollowLineArray.push(edgeSymbol);
  for(let index = 1; index < length-1; index++) {
    hollowLineArray[index] = " "; 
  }
  hollowLineArray.push(edgeSymbol)
  return hollowLineArray;
}

const repeatSymbol = function(symbol,width) {
  let symbolLine = "";
  for(let index = 0; index < width; index++) {
    symbolLine = symbolLine+symbol;
  }
  return symbolLine;
}

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


const makeFilledLine = function(symbol,width) {
  let line = "";
  for(let count = 0; count < width; count++) {
    line = line +symbol;
  }
  return line;
}

const makeFilledRectangle = function(symbol,width,height) {
  let pattern = [];
  for(let lines = 0; lines < height; lines++){
    pattern[lines] = makeFilledLine(symbol,width)
  }
  return pattern.join("\n");
}

exports.createAlternateRectangle = createAlternateRectangle;
exports.createEmptyRectangle = createEmptyRectangle;
exports.createFilledRectangle = createFilledRectangle;
exports.makeFilledRectangle = makeFilledRectangle;
