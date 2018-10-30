const assert = require("assert");
const util = require("../src/pattern_util.js");
let {makeFilledLine,repeatSymbol} = util;
let {justifyFilledLine,justifyHollowLine} = util;
let {makeHollowLine} = util;

//--------------------Testing justifyFilledLine----------------------------//
assert.deepEqual("*",justifyFilledLine(1,1,"*"));
assert.deepEqual("",justifyFilledLine(0,0,"*"));
assert.deepEqual(" *** ",justifyFilledLine(3,5,"*"));

//--------------------Testing justifyHollowLine--------------------------//
assert.deepEqual(" / \\ ",justifyHollowLine(3,5,"/","\\"));
assert.deepEqual("  / \\  ",justifyHollowLine(3,7,"/","\\"));
assert.deepEqual("  /   \\  ",justifyHollowLine(5,9,"/","\\"));
assert.deepEqual("/   \\",justifyHollowLine(5,5,"/","\\"));

//--------------------Testing repeatSymbol--------------------------//
assert.deepEqual("",repeatSymbol("*",0));
assert.deepEqual("*",repeatSymbol("*",1));
assert.deepEqual("",repeatSymbol("*",-1));
assert.deepEqual("*****",repeatSymbol("*",5));

//--------------------Testing makeFilledLine--------------------------//
assert.deepEqual("***  ",makeFilledLine("left",5,3));
assert.deepEqual("  ***",makeFilledLine("right",5,3));
assert.deepEqual("*****",makeFilledLine("right",5,5));
assert.deepEqual("*****",makeFilledLine("left",5,5));
assert.deepEqual("     ",makeFilledLine("left",5,0));

//--------------------Testing makeHollowLine--------------------------//
assert.deepEqual("*   *",makeHollowLine(5,"*","*"));
assert.deepEqual("*",makeHollowLine(1,"/","\\"));
assert.deepEqual("* *",makeHollowLine(3,"*","*"));

