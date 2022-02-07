// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
let findShort = s => s.split(' ').reduce((prev, cur) => prev.length < cur.length ? prev : cur).length;

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));