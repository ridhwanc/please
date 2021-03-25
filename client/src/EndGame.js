/** @module EndGame */

/**
 * A function which can determine if the game should end as someone has won or all players died.
 * @function
 * @param {Array<int>} listPlayerID - List of all player ID's in the game
 * @returns {boolean} Returns true if only 1 or less players are left alive, returns false otherwise.
 */
 function checkGameOver(playerList){
    var playersAlive = 0;
    playerList.forEach((p) => {
        if (p.alive){
            playersAlive++;
        }
    });
    if (playersAlive <= 1){
        endGame(playerList);
    }
}


/**
 * A function to stop the game loop once someone has won the game or it has ended in a draw.
 * @function
 */
 function endGame(playerList){
    var winner;
    playerList.forEach((p) => {
        if (p.alive){
            winner = p;
        }
    });
    sock.emit("gameOverMessage", "Game over: Winner is Player " + winner.id);
}