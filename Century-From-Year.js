// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
let century = (year) => year % 100 === 0 ? (year / 100) : Math.floor(year / 100) + 1;

console.log(century(1705));