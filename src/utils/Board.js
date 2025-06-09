export default class Board{
     #board;
     #len;
    constructor(len){
        this.#board = new Array(len*len).fill('');
        this.#len = len;
    }

    #isRow(){
        /*
          0 | 1 | 2     - | - | -     - | - | -
          - | - | -     3 | 4 | 5     - | - | -
          - | - | -     - | - | -     6 | 7 | 8
         */
        let winCount = 0;
        let symbol = this.#board[0];
        for (let i = 0; i < this.#board.length; i++){
            if(symbol !== ''){
                this.#board[i] === symbol && winCount++;
            }
            if (winCount === this.#len) return true;
            if((i + 1) % this.#len === 0){
                if (i + 1 < this.#board.length) symbol = this.#board[i + 1];
                winCount = 0;
            }
        }
        return false;
    }
    #isCol(){
        /*
         0 | - | -     - | 1 | -     - | - | 2
         3 | - | -     - | 4 | -     - | - | 5
         6 | - | -     - | 7 | -     - | - | 8
         */
        let winCount = 0;
        let colIndex;
        let symbol = this.#board[0];
        for (let i = 0; i < this.#len; i++){
            colIndex = i;
            while(colIndex < this.#board.length){
                if(symbol !== ''){
                    this.#board[colIndex] === symbol && winCount++;
                }
                if (winCount === this.#len) return true;
                colIndex += this.#len;
            }
            if (i + 1 < this.#board.length) symbol = this.#board[i + 1];
            winCount = 0;
        }
        return false;
    }

    #isLeftDiagonal(){
        /*
            0 | - | -
            - | 4 | -
            - | - | 8
         */
        let winCount = 0;
        let diagonalIndex = 0;
        let symbol = this.#board[0];
        if(symbol === '') return false;
        for (let i = 0; i < this.#len; i++){
            this.#board[diagonalIndex] === symbol && winCount++;
            diagonalIndex += this.#len + 1;
        }
        return winCount === this.#len;
    }

    #isRightDiagonal(){
        /*
                    - | - | 2
                    - | 4 | -
                    6 | - | -
         */
        let winCount = 0;
        let diagonalIndex = this.#len - 1;
        let symbol = this.#board[this.#len - 1];
        if(symbol === '') return false;
        for (let i = 0; i < this.#len; i++){
            this.#board[diagonalIndex] === symbol && winCount++;
            diagonalIndex += this.#len - 1;
        }
        return winCount === this.#len;
    }

    isWin(){
        return this.#isRow() || this.#isCol() || this.#isLeftDiagonal() || this.#isRightDiagonal();
    }

    isDraw( ) {
        return this.#board.filter(el => el === '').length === 0 && !this.isWin();
    }

    // Player is a boolean variable. Player 1 is true, and in that case it will return 'X'. If false, return 'O'
    getPlayerSymbol(player){
        return player ? 'X' : 'O'
    }

    setCell(i, player){
        const newBoard = [...this.#board];
        newBoard[i] = this.getPlayerSymbol(player);
        this.#board = newBoard;
        return newBoard;
    }

    getBoard(){
        return [...this.#board];
    }

    setBoard(given_board){
        this.#board  = given_board;
    }
}

