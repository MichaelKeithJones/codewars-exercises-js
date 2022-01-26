// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => a - b).shift() + numbers.sort((a,b) => a - b).shift();
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));