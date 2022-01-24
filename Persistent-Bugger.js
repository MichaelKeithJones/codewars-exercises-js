// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function persistence(num) {
    let count = 0;
    while(num >= 10) {
        num = num.toString().split('').reduce((a,b) => parseInt(a) * parseInt(b));
        count++;
    }
    return count;
}

console.log(persistence(999));