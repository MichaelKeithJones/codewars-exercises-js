// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
// function basicOp(operation, value1, value2) {
//     switch(operation){
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '/': return value1 / value2;
//         case '*': return value1 * value2;
//     }
//     return null;
// }

// Version 2
//////////////////////////////
let basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

console.log(basicOp('+', 4, 7));