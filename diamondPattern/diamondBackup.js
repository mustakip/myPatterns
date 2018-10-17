const createStarMark = function(numberOfStars,height) {
  let linePattern = "";
  let blankPosition = (height - numberOfStars)/2;
  for(let mark = 1; mark <=height; mark++) {
    let symbol = "*";
    if(mark <= blankPosition || mark > (height - blankPosition)) {
      symbol = " ";
    }
    linePattern += symbol;
  }
  return linePattern;
}

const createHollowMark = function(numberOfStars,height) {
  let linePattern = "";
  let markPosition = (height - numberOfStars)/2;
  for(let mark = 1; mark <= height; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) || mark == (height - markPosition)) {
      symbol = "*";
    }
    linePattern += symbol;
  }
  return linePattern;
}

const createUpperSlash = function(numberOfStars,height) {
  let linePattern = "";
  let markPosition = (height - numberOfStars)/2;
  for(let mark = 1; mark <= height; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) && numberOfStars != 1) {
      symbol = "/";
    }

    if(mark == (height-markPosition) && numberOfStars != height) {
      symbol = "\\";
    }
    linePattern += symbol;
  }
  return linePattern;
}

const createlowerSlash = function(numberOfStars,height) {
  let linePattern = "";
  let markPosition = (height - numberOfStars)/2;
  for(let mark = 1; mark <= height; mark++) {
    let symbol = " ";
    if(mark == (markPosition+1) && numberOfStars != 1) {
      symbol = "\\";
    }
    if(mark == height - markPosition) {
      symbol = "/";
    }
    linePattern += symbol;
  }
  return linePattern;  
}

const createAngledDiamond = function(height) {
  let delimiter = "";
  let pattern = "";
  pattern += delimiter+createStarMark(1,height);
  delimiter = "\n";
  for(let numberOfStars = 3; numberOfStars < height; numberOfStars+= 2) {
    pattern += delimiter+createUpperSlash(numberOfStars,height);
  }
  pattern += delimiter+createHollowMark(height,height);
  for(let numberOfStars = height -2; numberOfStars > 1; numberOfStars -= 2) {
    pattern += delimiter+createlowerSlash(numberOfStars,height);
  }
  pattern += delimiter+createStarMark(1,height);
  return pattern;
}

const createHollowDiamond = function(height) {
  let delimiter = "";
  let pattern = "";
  for(let numberOfStars = 1; numberOfStars <= height; numberOfStars+= 2) {
    pattern += delimiter+createHollowMark(numberOfStars,height);
    delimiter = "\n";
  }
  for(let numberOfStars = (height -2); numberOfStars > 0; numberOfStars -= 2) {
    pattern += delimiter+createHollowMark(numberOfStars,height);
  }
  return pattern;
}

const createFilledDiamond = function(height) {
  let delimiter = "";
  let pattern = "";
  for(let numberOfStars = 1; numberOfStars <=height; numberOfStars+= 2) {
    pattern += delimiter+createStarMark(numberOfStars,height);
    delimiter = "\n";
  }
  for(let numberOfStars = height - 2; numberOfStars > 0; numberOfStars -= 2) {
    pattern += delimiter+createStarMark(numberOfStars,height);
  }
  return pattern;
}

height = process.argv[3];
if(height % 2 ==0) {
  height -= 1;
}

if(process.argv[2] == "filled") {
  console.log(createFilledDiamond(height));
}

if(process.argv[2] == "hollow") {
  console.log(createHollowDiamond(height));
}

if(process.argv[2] == "angled") {
  console.log(createAngledDiamond(height));
}
