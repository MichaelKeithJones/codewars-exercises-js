// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
let multiplicationTable = function(size) {

    let array = new Array(size).fill(1).map((element, index) => (element * index) + 1);
    let result = [];
    array.map((element, index, array) => { result.push(array.map(num => num * (index + 1))); });
    return result;
}

console.log(multiplicationTable(3));