import '../styles/Game.css';
import {useState} from "react";

/*
function TitleCard({board, player}) {
    const drawStatus = isDraw(board);
    if(drawStatus) { return <h1>It's A Draw! 🙈</h1>}
    return <h1> {player ? 'Player 1' : 'Player 2'} </h1>;
}
 */
export default function Game() {

    const size = 9;
    const [board, setBoard] = useState(Array(size).fill(''));
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
            <div className="container">
               <CreateGrid board={board} player={player} />
            </div>
        </div>
    )
}