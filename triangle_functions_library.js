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

const generateTriangle = function(type,height) {
  let patterns = "";
  let delimiter = "";
  for(line = 1; line <= height; line++){
    patterns = patterns+delimiter+generateStarMark(height,line);
    delimiter = "\n";
  }
  return patterns;
}

const main = function() {
  type = process.argv[2];
  height = process.argv[3];
  console.log(generateTriangle(type,height));
}

exports.main = main;
