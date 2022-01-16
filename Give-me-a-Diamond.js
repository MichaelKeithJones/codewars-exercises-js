// Author: Michael K. Jones

// Version 1
//////////////////////////////
// function diamond(num){
//     let isEven = number => !(number % 2);
//     if (isEven(num) || num < 0) { return null; }
//
//     let result = '';
//     for(let i = 1; i <= num; i+=2) {
//         result = result + ' '.repeat((num-i)/2) + '*'.repeat(i) + '\n';
//     }
//
//     if (num > 1) {
//         for (let i = (num - 2); i >= 1; i -= 2) {
//             result = result + ' '.repeat((num-i)/2) + '*'.repeat(i) + '\n';
//         }
//     }
//
//     return result;
// }

// Version 2
//////////////////////////////
// function diamond(num){
//     if (num === 1) return '*\n';
//     if (!(num % 2) || num < 0) { return null; }
//
//     let result = '';
//     for(let i = 1, j = num; i <= num; i++, j--) {
//         if ((j - i) > 0) {  result = result + ' '.repeat((num - (2 * i - 1)) / 2) + '*'.repeat(2 * i - 1) + '\n'; }
//         else {  result = result + ' '.repeat((num - (2 * j - 1)) / 2) + '*'.repeat(2 * j - 1) + '\n'; }
//     }
//     return result;
// }

// Version 3
//////////////////////////////
function diamond(num){
    if (num === 1) return '*\n';
    if (!(num % 2) || num < 0) { return null; }

    let result = '';
    for (let i = 1; i <= num; i++) {
        let value = i;
        if (i > Math.ceil(num/2)) { value = num % i + 1; }

        result = result + ' '.repeat((num - (2 * value - 1)) / 2) + '*'.repeat(2 * value - 1) + '\n';
    }
    return result;
}


console.log(diamond(7));