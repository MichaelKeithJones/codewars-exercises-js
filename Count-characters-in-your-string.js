// Author: Michael K. Jones

// Version 1
//////////////////////////////
// function count (string) {
//     let final = {};
//     let letters = string.split('');
//     let currentLetter;
//     let lettersLength;
//
//     while(letters.length) {
//         currentLetter = letters[0];
//         lettersLength = letters.length;
//         letters = letters.filter(letter => letter.toLowerCase() !== letters[0]);
//         final[currentLetter] = lettersLength - letters.length;
//     }
//
//     return final;
// }

// Version 2
//////////////////////////////
function count (string) {
    let result = {}
    string.split('').map(letter => result[letter] ? result[letter]++ : result[letter] = 1);
    return result;
}

console.log(count("abargnhngrtrgnh"));