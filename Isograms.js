// Author: Michael K. Jones

// Version 1
//////////////////////////////
function isIsogram(str){
    if (typeof str != 'string') { return false; }
    else if (str == '') { return true; }
    else {
        let letters = str.toLowerCase().split('');
        for (let i = 0; i < letters.length; i++)
            if (letters.indexOf(letters[i]) != letters.lastIndexOf(letters[i])) { return false; }
        return true;
    }
}

console.log(isIsogram("Dermatoglyphics"));