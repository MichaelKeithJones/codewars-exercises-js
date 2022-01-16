// Author: Michael K. Jones

// Version 1
//////////////////////////////
function findEvenIndex(arr) {
    let sum = (a, b) => a + b;

    if (arr.length === 1 || (arr.slice(1, arr.length).reduce(sum) === 0)) { return 0; }
    else if (arr.slice(0, arr.length - 1).reduce(sum) === 0) { return arr.length - 1; }
    else {
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr.slice(0, i + 1).reduce(sum) === arr.slice(i + 2, arr.length).reduce(sum)) {
                return i + 1;
            }
        }
        return -1;
    }
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
