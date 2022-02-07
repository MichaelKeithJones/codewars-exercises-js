// Author: Michael K. Jones

// Version 1
//////////////////////////////
function solution(str, ending){

    let first = str.split('');
    let second = ending.split('');

    for (let i = 1; i <= second.length; i++)
        if (first[first.length - i] !== second[second.length - i])
            return false;
    return true;
}

console.log(solution('abc', 'bc'));