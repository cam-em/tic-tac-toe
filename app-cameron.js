const cells = document.querySelectorAll('.cell');

let X_OR_O = 0;

let board = ['', '', '', '', '', '', '', '', ''];

const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameWon = false;

let gameWinner;

let playerCount = 0;

const resetGame = () => {
    for(let cell of cells) {
        cell.innerText = '';
    }
    X_OR_O = 0;
    board = ['', '', '', '', '', '', '', '', ''];
    console.log(board);
    gameWon = false;
    gameWinner = '';
    playerCount = 0;
}

const resetGameButton = () => {
    document.querySelector('#reset').addEventListener('click', ()=>{
        resetGame();
    })
}

const checkResult = () => {
    for(let i in winners) {
        const winCondition = winners[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            gameWon = true;
            gameWinner = a;
            break
        }
    }
    checkDraw();
}

const checkDraw = () => {
    if(gameWon === false && playerCount === 9) {
        alert('It was a draw!')
        resetGame();
    }
}

const moveSelector = (cell, cellIndex) => {
    if(cell.innerText === "") {
        if (X_OR_O === 0) {
            cell.innerText = 'O';
            X_OR_O = 1;
            board[cellIndex] = 'O';
            console.log(board);
            playerCount++
            console.log(playerCount);
            console.log(gameWon)
        } else if(X_OR_O === 1) {
            cell.innerText = 'X';
            X_OR_O = 0;
            board[cellIndex] = 'X';
            console.log(board);
            playerCount++
            console.log(playerCount);
            console.log(gameWon)
        }
    }
}

const moveHover = (cell) => {
    if(cell.innerText === "") {
        if (X_OR_O === 0) {
            cell.innerText = 'O';           
        } else if(X_OR_O === 1) {
            cell.innerText = 'X';
        }
    }     
}

const displayWinner = () => {
    if (gameWon === true) {
        alert(`${gameWinner} won!`)
        resetGame();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    for (let cell in cells){
        const cellContent = cells[cell]
        cellContent.addEventListener('click', ()=> {
            moveSelector(cellContent, cell);
            checkResult();
            displayWinner();
            
        });
    resetGameButton();
    }
})
