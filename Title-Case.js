// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
function titleCase(title, minorWords) {
    let minor = minorWords ? minorWords.toLowerCase().split(' ') : [];
    let result = title.split(' ');

    result.map(function(element, index, array){
        minor.includes(element.toLowerCase()) && index ?
            array[index] = element.toLowerCase() :
            array[index] = element.charAt(0).toUpperCase() + element.toLowerCase().substr(1);
    });

    return result.join(' ');
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));