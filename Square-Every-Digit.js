// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
// function squareDigits(num){
//     let tempString = "";
//     let tempArray = [];
//
//     tempString = num.toString();
//     tempArray = tempString.split('').map(e => e * e);
//     tempString = tempArray.join("");
//
//     return parseInt(tempString);
// }

// Version 2
//////////////////////////////
let squareDigits = num => parseInt(num.toString().split('').map(e => e * e).join(""));

console.log(squareDigits(3212));