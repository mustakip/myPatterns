#! /bin/bash

./scripts/run_test.sh ./create_rectangle.js ./app_test_data/input/rectangle_input ./app_test_data/output/rectangle_output
Result1=$?
./scripts/run_test.sh ./create_triangle.js ./app_test_data/input/triangle_input ./app_test_data/output/triangle_output
Result2=$?
./scripts/run_test.sh ./create_diamond.js ./app_test_data/input/diamond_input ./app_test_data/output/diamond_output
Result3=$?
node ./test/library_test.js
Result4=$?
node ./test/util_test.js
Result5=$?

if [ $Result1 = 0 ]; then
  echo Test for createRectangle.js_________________PASSED
else
  echo Test for createRectangle.js_________________FAILED
fi

if [ $Result2 = 0 ]; then 
  echo Test for createTriangle.js__________________PASSED
else
  echo Test for createTriangle.js__________________FAILED
fi

if [ $Result3 = 0 ]; then 
  echo Test for createDiamond.js___________________PASSED
else
  echo Test for createDiamond.js___________________FAILED
fi

if [ $Result4 = 0 ]; then 
  echo Assertion test for library_test.js__________PASSED
else
  echo Assertion test for library_test.js__________FAILED
fi

if [ $Result5 = 0 ]; then 
  echo Assertion test for util_test.js_____________PASSED
else
  echo Assertion test for util_test.js_____________FAILED
fi
