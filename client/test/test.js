'use strict';

// var chai = require('chai');
// var assert = chai.assert();
// const Player = require('../src/Player.js');
// // require('../../client/index.html');
// require('../src/GenerateLevel.js');


// generateLevel();

for (let i =0; i < 10; i++){
        cells[i] = []
    for (let j=0; j<10; j++){
        cells[i][j] = null;
    }
}
player.row = 4;
player.col = 4;

describe('Test suite for movements', function() {

    describe('Movement Up Test', function() {
        it('Player should move up one row', function() {
            console.log("player Row: " + player.row);
            movePlayer(1, "up");
            console.log("player Row: " + player.row);
            console.log("assertion player row:" + player.row);
            chai.assert.equal(player.row, 3);
        });
        
    });

    describe('Movement Down Test', function() {
        it('Player should move down one row', function() {
            movePlayer(1, "down");
            chai.assert.equal(player.row, 4);
        });
    });

    describe('Movement left Test', function() {
        it('Player should move left one row', function() {
            movePlayer(1, "left");
            chai.assert.equal(player.col, 3);
        });
    });

    describe('Movement right Test', function() {
        it('Player should move right one row', function() {
            movePlayer(1, "right");
            chai.assert.equal(player.col, 4);
        });
    });
});
