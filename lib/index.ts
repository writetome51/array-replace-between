import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfNotArray } from 'error-if-not-array';
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';


// Example: if array is [1,2,3,4,5,6,7] , and you call replaceBetween(2, [9,10], array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  newValues doesn't have to be same length as number of items
// it's replacing.

export function replaceBetween(numItemsToPreserveAtEachEnd, newValues: any[], array): void {
	_validateArguments();
	let numToReplace = array.length - (numItemsToPreserveAtEachEnd * 2);

	// newValues is validated as array here:
	_replaceAdjacentItems(numItemsToPreserveAtEachEnd, numToReplace, newValues, array);


	function _validateArguments() {
		errorIfNotInteger(numItemsToPreserveAtEachEnd);
		errorIfNotArray(array);

		if (numItemsToPreserveAtEachEnd < 1) throw new Error('The number items to preserve' +
			' at each end must be at least 1');
		if ((numItemsToPreserveAtEachEnd * 2) >= array.length) {
			throw new Error('The number of items to preserve at each end multiplied by 2' +
				' either equals or exceeds the length of the array. This is not' +
				' allowed.');
		}
	}
}
