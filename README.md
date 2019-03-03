# replaceBetween(numItemsToPreserveAtEachEnd, newValues, array): void


Example: if array is [1,2,3,4,5,6,7] , and you call replaceBetween(2, [9, 10], array) ,
the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
the last 2, and replaces everything in-between with [9, 10].  The new values array doesn't 
have to be same length as the number of items it's replacing.

## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceBetween(3, [100], arr);

// arr is now [ 1, 2, 3, 100, 8, 9, 10]

replaceBetween(1, [20, 30], arr);

// arr is now [1, 20, 30, 10]

// At this point, if you call  replaceBetween(2, newItems, arr) , you'll get an error.  
// This is because there's nothing in-between 2 items at each end.  This function isn't 
// intended for simply inserting new items without replacing anything.

You can, however, replace something with nothing. Example:

arr = [ 1, 20, 30, 8 ];

replaceBetween(1, [], arr);

// arr is now [ 1, 8 ]
```

## Installation


## Loading
```

```