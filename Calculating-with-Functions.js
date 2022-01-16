// Author: Michael K. Jones

// Version 1
//////////////////////////////
let determine = function(value, input) {
    if (input === undefined) { return value; }
    else {
        switch (input.charAt(0)){
            case '+': return value + parseInt(input.charAt(1));
            case '-': return value - parseInt(input.charAt(1));
            case '*': return value * parseInt(input.charAt(1));
            case '/': return Math.floor(value / parseInt(input.charAt(1)));
        }
    }
}
let zero = input => determine(0, input);
let one = input => determine(1, input);
let two = input => determine(2, input);
let three = input => determine(3, input);
let four = input => determine(4, input);
let five = input => determine(5, input);
let six = input => determine(6, input);
let seven = input => determine(7, input);
let eight = input => determine(8, input);
let nine = input => determine(9, input);

let plus = input => '+' + input;
let minus = input => '-' + input;
let times = input => '*' + input;
let dividedBy = input => '/' + input;

console.log(seven(times(five())));