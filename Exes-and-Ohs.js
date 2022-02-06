// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function XO(str) {
    let xo = {};
    str.toLowerCase().split('').map(element => {
        xo[element] = xo[element] ? xo[element] + 1: 1;
    })
    return xo['x'] === xo['o'];
}

console.log(XO("xxxm"));