// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function encode(string) {
    let vowels = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return string.split('').map((element) => vowels[element] ? vowels[element] : element).join('');
}

function decode(string) {
    let vowels = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return string.split('').map((element) => vowels[element] ? vowels[element] : element).join('');
}

console.log(encode('How are you today?'));

console.log(decode('h2ll4'));