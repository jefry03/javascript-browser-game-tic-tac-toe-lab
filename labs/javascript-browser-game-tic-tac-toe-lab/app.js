let board = [];
let turn = 'X';
let winner = false;
let tie = false;

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
}

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((cell, index) => {
        if (squareEls[index]) {
            squareEls[index].textContent = cell;
        }
    });
}

function updateMessage() {
    if (!messageEl) return;

    if (!winner && !tie) {
        messageEl.textContent = `Player ${turn}'s turn`;
        return;
    }

    if (tie) {
        messageEl.textContent = "It's a tie!";
        return;
    }

    messageEl.textContent = `Player ${turn} wins!`;
}

function handleClick(index) {
    if (winner || tie || board[index] !== '') return;

    board[index] = turn;
    checkForWinner();
    checkForTie();

    if (!winner && !tie) {
        switchPlayerTurn();
    }

    render();
}

function placePiece(index) {
    if (winner || tie || board[index] !== '') return;
    board[index] = turn;
}

function checkForWinner() {
    winningCombos.forEach((combo) => {
        const [a, b, c] = combo;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    });
}

function checkForTie() {
    if (winner) 
        return;
    if (!board.includes('')) {
        tie = true;
    }
}

function switchPlayerTurn() {
    if (winner) return;
    turn = turn === 'X' ? 'O' : 'X';
}

squareEls.forEach((squareEl, index) => {
    squareEl.addEventListener('click', () => handleClick(index));
});

if (resetBtnEl) {
    resetBtnEl.addEventListener('click', init);
}

init();