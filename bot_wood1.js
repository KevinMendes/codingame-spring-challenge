/**
 * Grab the pellets as fast as you can!
 **/

var inputs = readline().split(' ');
const width = parseInt(inputs[0]); // size of the grid
const height = parseInt(inputs[1]); // top left corner is (x=0, y=0)
let wall = [];
for (let i = 0; i < height; i++) {
    const row = readline(); // one line of the grid: space " " is floor, pound "#" is wall
    let wallCase = row.split('');
    for(let y = 0; y < height; y++) {
        if (wallCase[y] == '#') {
            wall.push({x: i, y: y})
        }
    }
}
// game loop
while (true) {
    var inputs = readline().split(' ');
    const myScore = parseInt(inputs[0]);
    const opponentScore = parseInt(inputs[1]);
    const visiblePacCount = parseInt(readline()); // all your pacs and enemy pacs in sight
    let pacs = [];
    let pellets = [];
    for (let i = 0; i < visiblePacCount; i++) {
        var inputs = readline().split(' ');
        const pacId = parseInt(inputs[0]); // pac number (unique within a team)
        const mine = inputs[1] !== '0'; // true if this pac is yours
        const x = parseInt(inputs[2]); // position in the grid
        const y = parseInt(inputs[3]); // position in the grid
        const typeId = inputs[4]; // unused in wood leagues
        const speedTurnsLeft = parseInt(inputs[5]); // unused in wood leagues
        const abilityCooldown = parseInt(inputs[6]); // unused in wood leagues
        if (mine) {
            pacs.push({
                id: pacId, 
                x: x, 
                y: y
            });
        }
    }
    const visiblePelletCount = parseInt(readline()); // all pellets in sight
    for (let i = 0; i < visiblePelletCount; i++) {
        var inputs = readline().split(' ');
        const x = parseInt(inputs[0]);
        const y = parseInt(inputs[1]);
        const value = parseInt(inputs[2]); // amount of points this pellet is worth
        pellets.push({
            x: x,
            y: y,
            value: value
        });
    }

    const findSuperPellet = (pac) => {
        pellets.filter( pellet => pellet.value > 1).forEach(pellet => {
            //pellets.filter( p => p.value > 1 ).forEach( p => {
            is10Exist === true;
            let bigPalletAmountOfCase = 10000;
            let newBigPalletAmount = Math.abs(pac.x - pellet.x) + Math.abs(pac.y - pellet.y);
            if (newBigPalletAmount < bigPalletAmountOfCase) {
                bigPalletAmountOfCase = newBigPalletAmount;
                posToMove = pellet.x + ' ' + pellet.y;
            }
        })
        return posToMove
    } 

    const findClosestPellet = (pac) => {
        pellets.filter( pellet => pellet.value = 1).forEach(pellet => {
        let palletAmountOfCase = 10000;
            let newPalletAmount = Math.abs(pac.x - pellet.x) + Math.abs(pac.y - pellet.y);
            if (newPalletAmount < palletAmountOfCase) {
                palletAmountOfCase = newPalletAmount;
                posToMove = pellet.x + ' ' + pellet.y; 
            }
        })
        return posToMove
    }

    let posToMove = '';
    let pacPos = '';
    let is10Exist = false;
    let invalidPath = []
    pacs.forEach(pac => { 
        pellets.forEach(pellet => { 
            if (is10Exist) {
                if(pacPos === posToMove) {
                    is10Exist === false
                } else {
                    pacPos = pac.x + ' ' + pac.y;
                }
            }
            else if( pellet.value === 10) {
                findSuperPellet(pac)
            }
            else if (is10Exist === false) {
                findClosestPellet(pac)  
            }
        })
    console.log('MOVE ' + pac.id + ' ' + posToMove);
    })
}

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

        // MOVE <pacId> <x> <y>

