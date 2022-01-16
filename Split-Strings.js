// Author: Michael K. Jones

// Version 1
//////////////////////////////
function solution(str){
    let letters = str.split('');
    let take2 = (arr) => (arr.length === 1 ? (arr.shift() + `_`) : arr.shift() + arr.shift());
    let result = [];
    for(let i = 0; i < str.length; i+=2)
        result.push(take2(letters));
    return result;
}

console.log(solution('abc'));