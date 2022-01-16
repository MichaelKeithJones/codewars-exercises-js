// Author: Michael K. Jones

// Version 1
// //////////////////////////////
// function wave(str){
//
//     let final = [];
//     let result = str;
//
//     for(let i = 0; i < str.length; i++) {
//         if(result[i] !== ' ') {
//             result = result.toLowerCase();
//             result = result.split('');
//             result[i] = str[i].toUpperCase();
//             result = result.join('');
//             final.push(result);
//         }
//     }
//
//    return final;
// }

// Version 1
//////////////////////////////
function wave(str){
    return str.split('').map(function (element, index, array) {
        if (array[index] !== ' ') {
            array[index] = array[index].toUpperCase();
            let next = array.join('');
            array[index] = array[index].toLowerCase();
            return next;
        }
    }).filter(element => element !== undefined);
}

console.log(wave('g ap '));