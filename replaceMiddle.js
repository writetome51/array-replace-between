"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var _replaceAdjacentItems_1 = require("@writetome51/array-replace-adjacent-items/_replaceAdjacentItems");
// Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle(2, [9,10], array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  newValues doesn't have to be same length as number of items
// it's replacing.
function replaceMiddle(numItemsToPreserveAtEachEnd, newValues, array) {
    errorIfNotInteger_1.errorIfNotInteger(numItemsToPreserveAtEachEnd);
    errorIfNotArray_1.errorIfNotArray(array);
    if (numItemsToPreserveAtEachEnd < 1)
        throw new Error('The number items to preserve' +
            ' at each end must be at least 1');
    if ((numItemsToPreserveAtEachEnd * 2) > array.length) {
        throw new Error('The number of bookend items to preserve multiplied by 2' +
            ' exceeds the length of the array. This is not allowed.');
    }
    var numToRemove = array.length - (numItemsToPreserveAtEachEnd * 2);
    _replaceAdjacentItems_1._replaceAdjacentItems(numItemsToPreserveAtEachEnd, numToRemove, newValues, array);
}
exports.replaceMiddle = replaceMiddle;
