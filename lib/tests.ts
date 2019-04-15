import { replaceBetween } from '.';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Test 1: replace same number of items as the items you're adding:
replaceBetween(1, [4, 5, 6, 7, 8, 10], arr);
if (arraysMatch(arr, [1, 4, 5, 6, 7, 8, 10, 8])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: replace a more narrow selection with a single item:
replaceBetween(3, [100], arr);
if (arraysMatch(arr, [1, 4, 5, 100, 8, 10, 8])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: replace broad selection with a lot of items
replaceBetween(2, [1, 2, 3, 4, 5, 6], arr);
if (arraysMatch(arr, [1, 4, 1, 2, 3, 4, 5, 6, 10, 8])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: replace broad selection with only 2 items
replaceBetween(1, [20, 30], arr);
if (arraysMatch(arr, [1, 20, 30, 8])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: make sure it can replace something with nothing:
replaceBetween(1, [], arr);
if (arraysMatch(arr, [1, 8])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: if num items to preserve multiplied by 2 is equal to or greater than length
// of the array, then there's nothing to replace and this should trigger error:
let errorTriggered = false;
try {
	replaceBetween(1, [], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


arr = [1, 2, 3, 4, 5];
errorTriggered = false;
try {
	replaceBetween(-1, [10], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered = false;
try {
	replaceBetween(1, {}, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');



errorTriggered = false;
try {
	replaceBetween(1, [], {});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');
