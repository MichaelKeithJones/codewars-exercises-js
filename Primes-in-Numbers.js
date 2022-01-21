// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function primeFactors(n){

    let number = n;
    let times = 0;
    let currentDivisor = 1;
    let result = '';

    while (number !== 1) {
        currentDivisor++;
        times = 0;
        while (number % currentDivisor === 0) {
            number = number / currentDivisor;
            times++;
        }
        result += times === 1 ? `(${currentDivisor})` :
            times === 0 ? '' :
                `(${currentDivisor}**${times})`;
    }
    return result;
}

console.log(primeFactors(86240));