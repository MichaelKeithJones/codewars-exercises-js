// Author: Michael K. Jones

// Version 1
//////////////////////////////
function solution(number){
    if (number > 0) {
        let sum = 0;

        for (let i = number-1; i >= 0; i--) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                sum += i;
            }
        }

        return sum;
    } else {
        return 0;
    }
}

console.log(solution(10));