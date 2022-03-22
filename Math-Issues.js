// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
Math.round = function(number) {
    if (Number.isInteger(number)) return number;
    let parsedValue = number.toString().split('.');
    return parseFloat('.' + parsedValue[1]) >= 0.5 ? parseFloat(parsedValue[0]) + 1 : parseFloat(parsedValue[0]);
};

Math.ceil = function(number) {
    if (Number.isInteger(number)) return number;
    let parsedValue = number.toString().split('.');
    return parseFloat('.' + parsedValue[1]) > 0 ? parseFloat(parsedValue[0]) + 1 : parseFloat(parsedValue[0]);
};

Math.floor = function(number) {
    if (Number.isInteger(number)) return number;
    let parsedValue = number.toString().split('.');
    return parseFloat(parsedValue[0])
};

console.log(Math.round(11.4));

console.log(Math.ceil(3.0004));

console.log(Math.floor(0.4));