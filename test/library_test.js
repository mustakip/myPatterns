const assert = require("assert");
const library = require("../src/pattern_library.js");
let {createDiamond,createRectangle,createTriangle} = library;


// Testing createDiamond for filled type -------------------//

let filledDiamond_5 ="  *  ";
filledDiamond_5 += "\n *** ";
filledDiamond_5 += "\n*****";
filledDiamond_5 += "\n *** ";
filledDiamond_5 += "\n  *  ";

let filledDiamond_3 =" * ";
filledDiamond_3 += "\n***";
filledDiamond_3 += "\n * ";

assert.deepEqual(filledDiamond_5,createDiamond("filled",5));
assert.deepEqual(filledDiamond_3,createDiamond("filled",3));
assert.deepEqual("*",createDiamond("filled",1));

// Testing createDiamond for hollow type -------------------//

let hollowDiamond_5 ="  *  ";
hollowDiamond_5 += "\n * * ";
hollowDiamond_5 += "\n*   *";
hollowDiamond_5 += "\n * * ";
hollowDiamond_5 += "\n  *  ";

let hollowDiamond_3 =" * ";
hollowDiamond_3 += "\n* *";
hollowDiamond_3 += "\n * ";

assert.deepEqual(hollowDiamond_5,createDiamond("hollow",5));
assert.deepEqual(hollowDiamond_3,createDiamond("hollow",3));
assert.deepEqual("*",createDiamond("hollow",1));

// Testing createDiamond for angled type -------------------//

let angledDiamond_5 ="  *  ";
angledDiamond_5 += "\n / \\ ";
angledDiamond_5 += "\n*   *";
angledDiamond_5 += "\n \\ / ";
angledDiamond_5 += "\n  *  ";

let angledDiamond_3 =" * ";
angledDiamond_3 += "\n* *";
angledDiamond_3 += "\n * ";

assert.deepEqual(angledDiamond_5,createDiamond("angled",5));
assert.deepEqual(angledDiamond_3,createDiamond("angled",3));
assert.deepEqual("*",createDiamond("angled",1));

// Testing createRectangle for filled type -------------------//

let filledRectangle_1_2 = "*";
filledRectangle_1_2 += "\n*";

let filledRectangle_5_5 = "*****";
filledRectangle_5_5 += "\n*****";
filledRectangle_5_5 += "\n*****";
filledRectangle_5_5 += "\n*****";
filledRectangle_5_5 += "\n*****";

let filledRectangle_20_5 = "********************";
filledRectangle_20_5 += "\n********************";
filledRectangle_20_5 += "\n********************";
filledRectangle_20_5 += "\n********************";
filledRectangle_20_5 += "\n********************";

let filledRectangle_2_5 = "**";
filledRectangle_2_5 += "\n**";
filledRectangle_2_5 += "\n**";
filledRectangle_2_5 += "\n**";
filledRectangle_2_5 += "\n**";

assert.deepEqual(filledRectangle_1_2,createRectangle("filled",1,2));
assert.deepEqual(filledRectangle_2_5,createRectangle("filled",2,5));
assert.deepEqual(filledRectangle_5_5,createRectangle("filled",5,5));
assert.deepEqual(filledRectangle_20_5,createRectangle("filled",20,5));
assert.deepEqual("*",createRectangle("filled",1,1));

// Testing createRectangle for empty type -------------------//

let emptyRectangle_1_2 = "*";
emptyRectangle_1_2 += "\n*";

let emptyRectangle_5_5 = "*****";
emptyRectangle_5_5 += "\n*   *";
emptyRectangle_5_5 += "\n*   *";
emptyRectangle_5_5 += "\n*   *";
emptyRectangle_5_5 += "\n*****";

let emptyRectangle_3_3 = "***";
emptyRectangle_3_3 += "\n* *";
emptyRectangle_3_3 += "\n***";

let emptyRectangle_4_4 = "****";
emptyRectangle_4_4 += "\n*  *";
emptyRectangle_4_4 += "\n*  *";
emptyRectangle_4_4 += "\n****";

assert.deepEqual(emptyRectangle_1_2,createRectangle("empty",1,2));
assert.deepEqual(emptyRectangle_3_3,createRectangle("empty",3,3));
assert.deepEqual(emptyRectangle_4_4,createRectangle("empty",4,4));
assert.deepEqual(emptyRectangle_5_5,createRectangle("empty",5,5));
assert.deepEqual("*",createRectangle("empty",1,1));

// Testing createRectangle for alternating type -------------------//

let alternatingRectangle_2_2 = "**";
alternatingRectangle_2_2 += "\n--";

let alternatingRectangle_2_3 = "**";
alternatingRectangle_2_3 += "\n--";
alternatingRectangle_2_3 += "\n**";

let alternatingRectangle_5_5 = "*****";
alternatingRectangle_5_5 += "\n-----";
alternatingRectangle_5_5 += "\n*****";
alternatingRectangle_5_5 += "\n-----";
alternatingRectangle_5_5 += "\n*****";

assert.deepEqual(alternatingRectangle_2_2,createRectangle("alternating",2,2));
assert.deepEqual(alternatingRectangle_2_3,createRectangle("alternating",2,3));
assert.deepEqual(alternatingRectangle_5_5,createRectangle("alternating",5,5));
assert.deepEqual("*",createRectangle("alternating",1,1));


// Testing createTriangle for right type -------------------//

let rightTriangle_3 = "  *";
rightTriangle_3 += "\n **";
rightTriangle_3 += "\n***";

let rightTriangle_5 = "    *";
rightTriangle_5 += "\n   **";
rightTriangle_5 += "\n  ***";
rightTriangle_5 += "\n ****";
rightTriangle_5 += "\n*****";

let rightTriangle_7 = "      *";
rightTriangle_7 += "\n     **";
rightTriangle_7 += "\n    ***";
rightTriangle_7 += "\n   ****";
rightTriangle_7 += "\n  *****";
rightTriangle_7 += "\n ******";
rightTriangle_7 += "\n*******";

assert.deepEqual(rightTriangle_3,createTriangle("right",3));
assert.deepEqual(rightTriangle_5,createTriangle("right",5));
assert.deepEqual(rightTriangle_7,createTriangle("right",7));
assert.deepEqual("*",createTriangle("right",1));

// Testing createTriangle for left type -------------------//

let leftTriangle_3 = "*  ";
leftTriangle_3 += "\n** ";
leftTriangle_3 += "\n***";

let leftTriangle_5 = "*    ";
leftTriangle_5 += "\n**   ";
leftTriangle_5 += "\n***  ";
leftTriangle_5 += "\n**** ";
leftTriangle_5 += "\n*****";

let leftTriangle_7 = "*      ";
leftTriangle_7 += "\n**     ";
leftTriangle_7 += "\n***    ";
leftTriangle_7 += "\n****   ";
leftTriangle_7 += "\n*****  ";
leftTriangle_7 += "\n****** ";
leftTriangle_7 += "\n*******";

assert.deepEqual(leftTriangle_3,createTriangle("left",3));
assert.deepEqual(leftTriangle_5,createTriangle("left",5));
assert.deepEqual(leftTriangle_7,createTriangle("left",7));
assert.deepEqual("*",createTriangle("left",1));

