// Author: Michael K. Jones

// Version 1
//////////////////////////////
function order (words) {
    if (typeof words !== `string`) { return ``; }
    else if (words === ``) { return ``; }
    else {
        let strings = words.split(` `);
        let result = ``;
        for (let i = 1; i <= strings.length; i++) {
            for(let string of strings) {
                if (string.includes(`${i}`)) result += string + ` `;
            }
        }
        return result.trim();
    }
}

console.log(order("is2 Thi1s T4est 3a"));