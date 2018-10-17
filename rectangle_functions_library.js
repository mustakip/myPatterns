const generateEmptySymbol = function(width) {
  let linePattern = "";
  for(let marks = 1; marks <= (width); marks++) {
    let symbol = " ";
    if(marks == 1 || marks == width) {
      symbol = "*";
    }
      linePattern = linePattern+symbol;
    }
  return linePattern;
}

const generateStarSymbol = function(width) {
  let linePattern = "";
  for(let marks = 1; marks <= width; marks++) {
    linePattern = linePattern+"*";
  }
  return linePattern;
}

const generateDashSymbol = function(width) {
  let linePattern = "";
  for(let marks = 1; marks <= width; marks++) {
    linePattern = linePattern+"-";
  }
  return linePattern;
}

const fill = function(width,height) {
  let patterns = "";
  let delimiter = "";
  for(let line = 1; line <= height; line++) {
    patterns = patterns+delimiter+generateStarSymbol(width)
      delimiter = "\n";
  }
  return patterns;
}

const empty = function(width,height) {
  let delimiter = "";
  let pattern = "";
  pattern = pattern+delimiter+generateStarSymbol(width);
  delimiter = "\n";
  for(let line = 1; line <= (height-2); line++) {
    pattern = pattern+delimiter+generateEmptySymbol(width);
  }
  pattern = pattern+delimiter+generateStarSymbol(width);
  return pattern;
}

const alternate = function(width,height) {
  let pattern = "";
  let delimiter = "";

  for(let line = 1; line <= height; line++) {
    let patterns = generateDashSymbol(width);
    if(line % 2 != 0) {
      patterns = generateStarSymbol(width)
    }
      pattern = pattern+delimiter+patterns;
      delimiter = "\n";
    }
  return pattern;
}
const main = function() {
  let designType = process.argv[2];
  let width = process.argv[3];
  let height = process.argv[4];

  if(designType == "alternating") {
    console.log(alternate(width,height));
  }

  if(designType == "empty") {
    console.log(empty(width,height));
  }

  if(designType == "filled") {
    console.log(fill(width,height));
  }
}

exports.main = main;
