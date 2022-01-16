// Version 1
//////////////////////////////
// function sortArray(array) {
//     let result = array;
//     let isOdd = (number) => number%2;
//
//     let oddNumbers = [];
//
//     for(let i = 0; i < array.length; i++){
//         if (isOdd(array[i])) {
//             oddNumbers.push(array[i]);
//         }
//     }
//
//     console.log(oddNumbers);
//
//     oddNumbers.sort((a,b) => a - b);
//
//     console.log(oddNumbers);
//
//     let count = 0;
//     for (let j = 0; j < oddNumbers.length; j++) {
//         for (let i = count; i < array.length; i++) {
//             if (isOdd(array[i])) {
//                 count = i+1;
//                 result[i] = oddNumbers[j];
//                 console.log(result[i]);
//                 console.log(oddNumbers[j]);
//                 console.log(result);
//                 break;
//             }
//         }
//     }
//
//     return result;
// }

// Version 2
//////////////////////////////
function sortArray(array) {
    let oddNumbers = array.filter((number) => number%2).sort((a,b) => a - b);
    let sortedList = array.map((number) => number % 2 ? oddNumbers.shift() : number);
    return(sortedList);
}


console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));