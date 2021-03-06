// Author: Michael K. Jones

"use strict";

let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let moves = ['up', 'left', 'right', 'left', 'left'];

// Version 1
//////////////////////////////
// function streetFighterSelection(fighters, position, moves) {
//
//     let pos = position;
//
//     let left = () => pos[0] ? pos[0]-- : pos[0] = 5;
//     let right = () => (pos[0] === 5) ? pos[0] = 0 : pos[0]++;
//     let up = () => pos[1] ? pos[1]-- : 0;
//     let down = () => pos[1] ? 1 : pos[1]++;
//
//     return moves.map((element) => {
//         element === 'left' ? left() : element === 'right' ? right() : element === 'up' ? up() : down();
//         return fighters[pos[1]][pos[0]];
//     });
// }

// Version 1
//////////////////////////////
function streetFighterSelection(fighters, originalPosition, moves) {
    let currentPosition = originalPosition;
    return moves.map((element) => {
        element === 'left' ? currentPosition[0] ? currentPosition[0]-- : currentPosition[0] = 5
            : element === 'right' ? (currentPosition[0] === 5) ? currentPosition[0] = 0 : currentPosition[0]++
                : element === 'up' ? currentPosition[1] ? currentPosition[1]-- : 0
                    : currentPosition[1] ? 1 : currentPosition[1]++;
        return fighters[currentPosition[1]][currentPosition[0]];
    });
}

console.log(streetFighterSelection(fighters, [0, 0], moves));