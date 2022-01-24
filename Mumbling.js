// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function accum(s) {
    return s.split('').map((element, index) => {
        return element.toUpperCase() + Array(index).fill(element.toLowerCase()).join('');
    }).join('-');
}

console.log(accum("ZpglnRxqenU"));