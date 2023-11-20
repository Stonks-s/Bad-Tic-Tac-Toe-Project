let currentPlayer = 'X';    // This variable keeps track of the current player ('X' or 'O') whose turn it is to make a move.
let gameBoard = ['', '', '', '', '', '', '', '', ''];   // This array represents the state of the Tic Tac Toe board. 
                                                        // It is initialized with nine empty strings, each corresponding to a cell on the board.
let gameActive = true;  // This boolean variable is used to determine whether the game is still active. 
                        // It becomes false when the game is over (either someone wins or it's a tie).

function handleClick(index) {   // This function is called when a player clicks on a cell of the Tic Tac Toe board. 
                                // The index parameter represents the index of the clicked cell.
    if (gameBoard[index] === '' && gameActive) { // It first checks if the clicked cell is empty (gameBoard[index] === '') 
                                                 // and if the game is still active (gameActive).
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        // If both conditions are true, it updates the game state:
            // Sets the current player's symbol ('X' or 'O') in the clicked cell.
            // Checks if the current player has won (checkWinner() function).
            // If a player wins, it displays a message and sets gameActive to false.
            // If the game is a tie (all cells are filled), it displays a tie message and sets gameActive to false.
            // If the game is still ongoing, it switches the player for the next turn and updates the message.

        if (checkWinner()) {    
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a tie!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {    // This function checks if there is a winner on the current game board. 
                            // It defines an array winConditions that represents all possible winning 
                            // combinations in Tic Tac Toe (rows, columns, and diagonals).
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function resetGame() {  // This function is called when the "Reset Game" button is clicked.  
                        // It resets all the game-related variables to their initial state, clears the game board, 
                        // and sets the message to indicate that it's Player X's turn.
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('message').innerText = 'Player X\'s turn';

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

