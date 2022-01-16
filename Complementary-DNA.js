// Author: Michael K. Jones

// Version 1
//////////////////////////////
function DNAStrand(dna){
    return dna.split('').map(function (letter) {
        switch (letter) {
            case 'C': return 'G';
            case 'G': return 'C';
            case 'A': return 'T';
            case 'T': return 'A';
        }
    }).join('');
}

console.log(DNAStrand('ATTGC'));