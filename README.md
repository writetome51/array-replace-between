This function replaces items in the middle of the array and returns void.

Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle(2, [9,10], array) ,
the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
the last 2.  newValues doesn't have to be same length as number of items
it's replacing.

Usage:

replaceMiddle(numItemsToPreserveAtEachEnd, newValues, arrayToModify);