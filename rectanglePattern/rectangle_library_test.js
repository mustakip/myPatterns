const assert = require("assert");
const lib = require("./rectangle_library.js");

// Test for filled rectangle pattern.
assert.deepEqual(lib.createFilledRectangle(1,2),"*\n*");
assert.deepEqual(lib.createFilledRectangle(2,2),"**\n**");
assert.deepEqual(lib.createFilledRectangle(20,5),lib.makeFilledRectangle("*",20,5));

//Test for empty rectangle pattern.
assert.deepEqual(lib.createEmptyRectangle(1,2),["*","*"]);
assert.deepEqual(lib.createEmptyRectangle(2,2),["**","**"]);
assert.deepEqual(lib.createEmptyRectangle(4,4),["****","*  *","*  *","****"]);

//Test for createAlternateRectangle rectatngle pattern.
assert.deepEqual(lib.createAlternateRectangle(1,2),["*","-"]);
assert.deepEqual(lib.createAlternateRectangle(2,3),["**","--","**"]);
assert.deepEqual(lib.createAlternateRectangle(4,4),["****","----","****","----"]);

console.log("all tests passed");
