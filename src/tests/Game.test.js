import { isDraw } from '../pages/Game.js';

describe('isDraw', () => {
    test('returns false for an empty board', () => {
        const board = Array(9).fill('');
        expect(isDraw(board)).toBe(false);
    });

    test('returns false for a non-full board', () => {
        const board = ['X', '', 'O',
                                '', '', '',
                                '', '', 'X'];
        expect(isDraw(board)).toBe(false);
    });

    test('returns true for a full board without a win', () => {
        const board =  ['X', 'O', 'X',
                                'X', 'O', 'O',
                                'O', 'X', 'X'];
        expect(isDraw(board)).toBe(true);
    });
});