const assert = require("assert");
const util = require("../src/pattern_util.js");
let {generateStarMark,repeatSymbol,generateHollowLine} = util;
let {createlowerSlash,createHollowMark,createStarMark} = util;
let {createUpperSlash} = util;

//--------------------Testing createStarMark----------------------------//
assert.deepEqual("*",createStarMark(1,1));
assert.deepEqual("",createStarMark(0,0));
assert.deepEqual(" *** ",createStarMark(3,5));

//--------------------Testing createHollowMark--------------------------//
assert.deepEqual("*",createHollowMark(1,1));
assert.deepEqual(" * * ",createHollowMark(3,5));
assert.deepEqual(" *   * ",createHollowMark(5,7));

//--------------------Testing createUpperSlash--------------------------//
assert.deepEqual(" / \\ ",createUpperSlash(3,5));
assert.deepEqual("  / \\  ",createUpperSlash(3,7));
assert.deepEqual("  /   \\  ",createUpperSlash(5,9));

//--------------------Testing createlowerSlash--------------------------//
assert.deepEqual(" \\ / ",createlowerSlash(3,5));
assert.deepEqual("  \\ /  ",createlowerSlash(3,7));
assert.deepEqual("  \\   /  ",createlowerSlash(5,9));

//--------------------Testing generateHollowLine--------------------------//
assert.deepEqual([],generateHollowLine("*",0));
assert.deepEqual(["*"],generateHollowLine("*",1));
assert.deepEqual(["-"," "," "," ","-"],generateHollowLine("-",5));

//--------------------Testing repeatSymbol--------------------------//
assert.deepEqual("",repeatSymbol("*",0));
assert.deepEqual("*",repeatSymbol("*",1));
assert.deepEqual("",repeatSymbol("*",-1));
assert.deepEqual("*****",repeatSymbol("*",5));

//--------------------Testing generateStarMark--------------------------//
assert.deepEqual("***  ",generateStarMark("left",5,3));
assert.deepEqual("  ***",generateStarMark("right",5,3));
assert.deepEqual("*****",generateStarMark("right",5,5));
assert.deepEqual("*****",generateStarMark("left",5,5));
assert.deepEqual("     ",generateStarMark("left",5,0));

