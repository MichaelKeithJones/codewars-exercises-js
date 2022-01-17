// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function kebabize(str) {
    return str.split('').map((element, index, array) => /[A-Za-z]/.test(element)
        ? (element === element.toUpperCase()) ? '-' + element
            : element: '').join('').split('').filter((element, index) => !((element === '-') && !index)).join('').toLowerCase();
}

console.log(kebabize('-Ops-PUouPP'));