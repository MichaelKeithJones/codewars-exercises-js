// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
// let isMultipleOf2or3or5 = number => number === 3 || number === 2 || number === 5 ? false : (number % 3 === 0 || number % 2 === 0 || number % 5 === 0);
// let isPrime = function(number) {
//     for (let i = 2; i < number; i++) {
//         if (!isMultipleOf2or3or5(i) && (number % i === 0)) { return false; }
//     }
//     return true;
// }
// let gap = function(g, m, n) {
//     let answer = [];
//     let primes = [];
//     for(let i = m; i <= n; i++) {
//         if (isPrime(i)) { primes.push(i); }
//     }
//
//     for(let index = 0; index < primes.length; index++){
//         if (primes[index+1] - primes[index] === g) {
//             answer.push(primes[index])
//             answer.push(primes[index+1]);
//             break;
//         }
//     }
//     return answer.length === 0 ? null : answer;
// }

// Version 2
//////////////////////////////
// let gap = function(g, m, n) {
//     let answer = [];
//     let primes = [];
//     let isPrime = true;
//
//     for(let i = m; i <= n; i++) {
//         isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) { isPrime = false; }
//         }
//         if (isPrime) { primes.push(i); }
//     }
//
//     for(let index = 0; index < primes.length; index++){
//         if (primes[index+1] - primes[index] === g) {
//             answer.push(primes[index])
//             answer.push(primes[index+1]);
//             break;
//         }
//     }
//     return answer.length === 0 ? null : answer;
// }

// Version 3
//////////////////////////////
function isPrime(n, i)
{
    if (n <= 2)
        return (n === 2);
    if (n % i === 0)
        return false;
    if (i * i > n)
        return true;

    return isPrime(n, i + 1);
}

let gap = function(g, m, n) {
    let answer = [];
    let primes = [];

    for(let j = m; j <= n; j++) {
        if (j%2 !== 0 && j%3 !== 0 && j%5 !== 0 && isPrime(j, 2)) { primes.push(j); }
    }

    for(let index = 0; index < primes.length; index++){
        if (primes[index+1] - primes[index] === g) {
            answer.push(primes[index])
            answer.push(primes[index+1]);
            break;
        }
    }
    return answer.length === 0 ? null : answer;
}

console.log(gap(4, 100, 110));