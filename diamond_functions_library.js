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

const createAngledDiamond = function(width) {
  let delimiter = "";
  let pattern = "";
  pattern += delimiter+createStarMark(1,width);
  delimiter = "\n";
  for(let numberOfStars = 3; numberOfStars < width; numberOfStars+= 2) {
    pattern += delimiter+createUpperSlash(numberOfStars,width);
  }
  pattern += delimiter+createHollowMark(width,width);
  for(let numberOfStars = width -2;numberOfStars > 1;numberOfStars-=2){
    pattern += delimiter+createlowerSlash(numberOfStars,width);
  }
  pattern += delimiter+createStarMark(1,width);
  return pattern;
}

const createDiamond = function(width) {
  let delimiter = "";
  let pattern = "";
  let typeOfDiamond;
  for(let numberOfStars = 1; numberOfStars <=width; numberOfStars+= 2) {
    typeOfDiamond = createHollowMark(numberOfStars,width);
    if(process.argv[2] == "filled") {
      typeOfDiamond = createStarMark(numberOfStars,width);
    }
    pattern += delimiter+typeOfDiamond;
    delimiter = "\n";
  }
  for(let numberOfStars = width - 2;numberOfStars > 0;numberOfStars-=2){
    typeOfDiamond = createHollowMark(numberOfStars,width);
    if(process.argv[2] == "filled") {
      typeOfDiamond = createStarMark(numberOfStars,width);
    }
    pattern += delimiter+typeOfDiamond;
  }
  return pattern;
}

const main = function() {
  let width = process.argv[3];
  let diamondType = process.argv[2];
  let output;

  if(width % 2 ==0) {
    width -= 1;
  }
  if(diamondType == "hollow" || diamondType == "filled") {
    output = (createDiamond(width));
  }
  if(diamondType == "angled") {
    output = (createAngledDiamond(width));
  }
  console.log(output);
}

exports.main = main;
