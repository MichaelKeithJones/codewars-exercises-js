// Author: Michael K. Jones

// Version 1
//////////////////////////////
var countBits = function(n) {
    let numbers = n.toString(2).split('');
    let count = 0;
    numbers.forEach(function(element) { if (element == 1) count++; });
    return count;
};

console.log(countBits(1234));