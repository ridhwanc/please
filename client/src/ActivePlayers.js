P1 = "";
P2 = "";
P3 = "";
P4 = "";
waitList = [];

function addPlayer(playerID){
    // console.log("Add Players called");
    if (P1 === ""){
        P1 = playerID;
        console.log(playerID + " is player 1");
    } else if (P2 === ""){
        P2 = playerID;
        console.log(playerID + " is player 2");
    } else if (P3 === ""){
        P3 = playerID;
        console.log(playerID + " is player 3");
    } else if (P4 === ""){
        P4 = playerID;
        console.log(playerID + " is player 4");
    } else {
        waitList.push(playerID);
    }

    console.log("P1: " + P1);
    console.log("P2: " + P2);
    console.log("P3: " + P3);
    console.log("P4: " + P4);
}

function removePlayer(playerID){
    // console.log('Remove Player Called');
    if (P1 === playerID){
        if (waitList.length > 0){
            P1 = waitList.shift();
        } else {
            P1 = "";
            sock.emit('message', "No player available to fill spot");
        }
        console.log('Removed P1, P1 is now: ' + P1);
    } else if (P2 === playerID){
        if (waitList.length > 0){
            P2 = waitList.shift();
        } else {
            P2 = "";
            sock.emit('message', "No player available to fill spot");
        }
        console.log('Removed P2, P2 is now: ' + P2);
    } else if (P3 === playerID){
        if (waitList.length > 0){
            P3 = waitList.shift();
        } else {
            P3 = "";
            sock.emit('message', "No player available to fill spot");
        }
        console.log('Removed P3, P3 is now: ' + P2);
    } else if (P4 === playerID){
        if (waitList.length > 0){
            P4 = waitList.shift();
        } else {
            P4 = "";
            sock.emit('message', "No player available to fill spot");
        }
        console.log('Removed P4, P4 is now: ' + P2);
    }
}

function checkPlayer(playerID){
    if (P1 === playerID) return 1;
    if (P2 === playerID) return 2;
    if (P3 === playerID) return 3;
    if (P4 === playerID) return 4;
    console.log(playerID + " vs " + P2);

    return 0;
}