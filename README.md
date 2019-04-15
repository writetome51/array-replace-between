# replaceBetween(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToPreserveAtEachEnd,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces everything between `numItemsToPreserveAtEachEnd` with `newValues` in `array`.

## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
replaceBetween(3, [100], arr);
// arr is now [ 1, 2, 3, 100, 8, 9, 10]

arr = [1, 2, 3, 4, 5];
replaceBetween(1, [20, 30], arr);
// arr is now [1, 20, 30, 5]

// You can replace something with nothing. Example:

arr = [ 1, 2, 3, 4, 5, 6 ];
replaceBetween(2, [], arr);
// arr is now [ 1, 2, 5, 6 ]
```

## Installation
`npm i  @writetome51/array-replace-between`

## Loading
```
// if using TypeScript:
import {replaceBetween} from '@writetome51/array-replace-between';
// if using ES5 JavaScript:
var replaceBetween = 
    require('@writetome51/array-replace-between').replaceBetween;
```
