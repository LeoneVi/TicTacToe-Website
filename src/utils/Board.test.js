import assert from 'assert';
import Board from './Board.js';

describe('getPlayerSymbol', () => {
    test('returns the correct symbol for player one and player two', () => {
        const size = 3;
        const board = new Board(size);
        assert(board.getPlayerSymbol(true) === 'X', `Expected player one to return 'X', got ${board.getPlayerSymbol(true)}`);
        assert(board.getPlayerSymbol(false) === 'O', `Expected player one to return 'X', got ${board.getPlayerSymbol(false)}`);
    });
});

describe('setCell', () => {
    test('sets entire board into "X"s', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        const symbol = board.getPlayerSymbol(player);
        for (let i = 0; i < size*size; i++) {
            board.setCell(i, player);
        }
        assert(board.getBoard().every(el => el === symbol));
    });

    test('sets entire board into "O"s', () => {
        const size = 3;
        const board = new Board(size);
        const player = false;
        const symbol = board.getPlayerSymbol(player);
        for (let i = 0; i < size*size; i++) {
            board.setCell(i, player);
        }
        assert(board.getBoard().every(el => el === symbol));
    });
});


describe('isWin', () => {
    test('Returns true if there is a row win', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        board.setCell(6, player);
        board.setCell(7, player);
        board.setCell(8, player);
        expect(board.isWin()).toBe(true);
    });


    test('Returns true if there is a column win', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        board.setCell(2, player);
        board.setCell(5, player);
        board.setCell(8, player);
        expect(board.isWin()).toBe(true);
    });

    test('Returns true if there is a left diagonal win', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        board.setCell(0, player);
        board.setCell(4, player);
        board.setCell(8, player);
        expect(board.isWin()).toBe(true);
    });

    test('Returns true if there is a right diagonal win', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        board.setCell(2, player);
        board.setCell(4, player);
        board.setCell(6, player);
        expect(board.isWin()).toBe(true);
    });

    test('Returns false if board is blank', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        expect(board.isWin()).toBe(false);
    });
});

describe('isDraw', () => {
    test('Returns false if there is a win', () => {
        const size = 3;
        const board = new Board(size);
        const player = true;
        board.setCell(6, player);
        board.setCell(7, player);
        board.setCell(8, player);
        expect(board.isDraw()).toBe(false);
    });

    test('Returns true if there is a draw', () => {
        const size = 3;
        const board = new Board(size);
        const player1 = true;
        const player2 = false;
        board.setCell(0, player1);
        board.setCell(1, player2);
        board.setCell(2, player1);
        board.setCell(3, player2);
        board.setCell(4, player1);
        board.setCell(5, player2);
        board.setCell(6, player2);
        board.setCell(7, player1);
        board.setCell(8, player2);
        expect(board.isDraw()).toBe(true);
    });
});

