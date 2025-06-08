import '../styles/Game.css';
import {useState} from "react";

function isRow(board){
    return board.map()
}
function isCol(){

}
function isLeftDiagonal(){

}
function isRightDiagonal(){

}

function isWin(board){
    return isRow(board) || isCol(board) || isLeftDiagonal(board) || isRightDiagonal(board);
}

export function isDraw( board ) {
    if (!Array.isArray(board)) throw new Error(`The board must be a Array, got ${typeof board}`);
    return board.filter(el => el === '').length === 0 && !isWin( board );
}


function TitleCard({board, player}) {
    const drawStatus = isDraw(board);
    if(drawStatus) { return <h1>It's A Draw! 🙈</h1>}
    return <h1> {player ? 'Player 1' : 'Player 2'} </h1>;
}

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState(true); // Player 1 = true, Player 2 = false

    function handleClick(i){
        if(board[i] !== '') return;
        const newBoard = [...board];
        newBoard[i] = player ? 'X' : 'O';
        setBoard(newBoard);
        setPlayer(!player);
    }


    function CreateGrid({ board }) {
        return board.map((el, i) => (
            <div onClick={() => handleClick(i)}>
                {el}
            </div>
        ));
    }


    return (
        <div className="Game">
            {TitleCard({board, player})}
            <div className="container">
               <CreateGrid board={board} player={player} />
            </div>
        </div>
    )
}