// Author: Michael K. Jones

// Version 1
//////////////////////////////
// function calc(x){
//
//     let result = '';
//     let sum = (a, b) => parseInt(a) + parseInt(b);
//
//     for (let i in x)
//         result += x.charCodeAt(parseInt(i)).toString();
//
//     return result.split('').reduce(sum) - result.split('7').join('1').split('').reduce(sum);
// }

// Version 2
//////////////////////////////
function calc(x){
    let sum = (a, b) => parseInt(a) + parseInt(b);
    return x.split('').map(x => x.charCodeAt(0)).join('').split('').reduce(sum) - x.split('').map(x => x.charCodeAt(0)).join('').split('7').join('1').split('').reduce(sum)
}

console.log(calc('656667'));
