// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
var numberToPrice = function(number) {
    if (typeof number == 'string') return 'NaN';
    if (isNaN(number)) return 'NaN';

    let tempArray = [];
    let tempString = '';

    let isPositive = number >= 0 ? true : false;

    if (!isPositive) {
        let tempArray = number.toString().split('');
        tempArray.shift();
        tempString = tempArray.join('')
    } else { tempString = number.toString(); }

    let final = [];
    if (tempString.includes('.')) {

        tempArray = tempString.split('.');
        let front = tempArray[0].split('');
        if (front.length < 1) return 'NaN'
        final.push(front.shift());
        while(front.length > 0) {
            if (front.length % 3 == 0) final.push(',');
            final.push(front.shift());
        }
        final.push('.');
        let back = tempArray[1].split('');
        final.push(back.shift());
        if (back.length > 0) { final.push(back.shift()) } else { final.push('0') }
    } else {
        let front = tempString.split('');
        final.push(front.shift());
        while(front.length > 0) {
            if (front.length % 3 == 0) final.push(',');
            final.push(front.shift());
        }
        final.push('.', '0', '0');
    }

    if (!isPositive) { final.unshift('-'); }
    return final.join('');
}

console.log(numberToPrice());