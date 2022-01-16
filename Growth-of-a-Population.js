// Author: Michael K. Jones

// Version 1
//////////////////////////////
function nbYear(p0, percent, aug, p) {
    let total = p0;
    let count = 0;

    while (total < p) {
        total = total + total * (percent / 100.0) + aug;
        count++;
    }
    return count;
}

console.log(nbYear(1500, 5, 100, 5000));