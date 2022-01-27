// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function noSpace(x){
    return x.split('').map(element => element === ' ' ? '' : element).join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));