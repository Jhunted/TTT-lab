/*----- constants -----*/ 
const PIECES = {
    '0': 'transparent', 
    '1': 'Demigorgon', 
    '-1': 'ELEVEN'
    
};

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section.board')
.addEventListener('click', handleClick);

document.querySelector('button')
.addEventListener('click', resetGame);

/*----- functions -----*/
init();

function init() {
    board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    turn = 1;
    winner = null;               
    render();
}

function render() {

    board.forEach(function(tile, tileIdx) {
    if (tile === 1)
        document.getElementById(tileIdx).style.backgroundColor = 'red';
    if (tile === -1)
        document.getElementById(tileIdx).style.backgroundColor = 'black';
    if (tile === 0)
        document.getElementById(tileIdx).style.backgroundColor = 'transparent';
        
        msgEl.textContent = `${PIECES[turn]}'s Turn!`;

});
}

function handleClick(event) {
    let Idx = event.target.id;
    if (board[Idx] !==0) return;
    board[Idx] = turn;

    turn *= -1;

    render();
}

function resetGame() {
    init();
}