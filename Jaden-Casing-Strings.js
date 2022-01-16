// Author: Michael K. Jones

// Version 1
//////////////////////////////
String.prototype.toJadenCase = function () {
    let temp = this.split(' ');
    temp.forEach((element, index, array) => {
        array[index] = element.substr(0,1).toUpperCase()
            + element.substr(1);
    })
    return temp.join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());