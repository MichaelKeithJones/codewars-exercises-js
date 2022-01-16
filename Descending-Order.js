// Author: Michael K. Jones

// Version 1
//////////////////////////////
let descendingOrder = (n) => parseInt(n.toString().split('').sort().reverse().join(''));

console.log(descendingOrder('42145'));