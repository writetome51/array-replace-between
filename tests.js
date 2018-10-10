"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceMiddle_1 = require("./replaceMiddle");
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
replaceMiddle_1.replaceMiddle(2, [100, 200, 300], arr);
console.log(arr);
// -> [ 1, 2, 100, 200, 300, 7, 8 ]
replaceMiddle_1.replaceMiddle(1, [100, 200, 300], arr);
console.log(arr);
// -> [ 1, 100, 200, 300, 8 ]
replaceMiddle_1.replaceMiddle(1, [20, 30], arr);
console.log(arr);
// -> [ 1, 20, 30, 8 ]
replaceMiddle_1.replaceMiddle(1, [], arr);
console.log(arr);
// => [ 1, 8 ]
