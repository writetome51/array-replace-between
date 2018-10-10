import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { _replaceAdjacentItems }
	from '@writetome51/array-replace-adjacent-items/_replaceAdjacentItems';


// Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle(2, [9,10], array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  newValues doesn't have to be same length as number of items
// it's replacing.

export function replaceMiddle(numItemsToPreserveAtEachEnd, newValues: any[], array): void {
	_checkInputValidity();
	let numToRemove = array.length - (numItemsToPreserveAtEachEnd * 2);

	// newValues is validated as array here:
	_replaceAdjacentItems(numItemsToPreserveAtEachEnd, numToRemove, newValues, array);


	function _checkInputValidity(){
		errorIfNotInteger(numItemsToPreserveAtEachEnd);
		errorIfNotArray(array);

		if (numItemsToPreserveAtEachEnd < 1) throw new Error('The number items to preserve' +
			' at each end must be at least 1');
		if ((numItemsToPreserveAtEachEnd * 2) > array.length) {
			throw new Error('The number of bookend items to preserve multiplied by 2' +
				' exceeds the length of the array. This is not allowed.');
		}
	}
}
