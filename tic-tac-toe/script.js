// Gameboard module: manages board state and display
const Gameboard = (() => {
    const board = Array(9).fill(null); // 3x3 grid stored as a 1D array

    const getBoard = () => board;

    const setMove = (index, marker) => {
        if (!board[index]) {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) board[i] = null;
    };

    return { getBoard, setMove, resetBoard };
})();

// Player factory: creates a player with a given marker (X or O)
const Player = (marker) => {
    return { marker };
};

// GameController module: controls game flow and win-checking
const GameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let currentPlayer = playerX;
    let gameOver = false;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    const switchPlayer = () => {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    };

    const makeMove = (index) => {
        if (!gameOver && Gameboard.setMove(index, currentPlayer.marker)) {
            if (checkWin()) {
                alert(`Player ${currentPlayer.marker} wins!`);
                gameOver = true;
            } else if (Gameboard.getBoard().every(cell => cell)) {
                alert("It's a draw!");
                gameOver = true;
            } else {
                switchPlayer();
            }
        }
    };

    const checkWin = () => {
        return winningCombinations.some(combination =>
            combination.every(index => Gameboard.getBoard()[index] === currentPlayer.marker)
        );
    };

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = playerX;
        gameOver = false;
    };

    return { makeMove, resetGame };
})();

// DisplayController module: handles DOM interactions
const DisplayController = (() => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");

    const render = () => {
        Gameboard.getBoard().forEach((marker, index) => {
            cells[index].textContent = marker;
        });
    };

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            GameController.makeMove(index);
            render();
        });
    });

    resetButton.addEventListener("click", () => {
        GameController.resetGame();
        render();
    });

    return { render };
})();

// Initial render
DisplayController.render();
