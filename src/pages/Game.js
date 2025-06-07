import '../styles/Game.css';
import {useState} from "react";



export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState(true); // Player 1 = true, Player 2 = false



    function isWin({board}){
        return false;
    }

    function isDraw({ board }) {
        return board.every(el => el !== '') && !isWin({ board });
    }

    function titleCard({board, player}) {
        const drawStatus = isDraw({ board });
        if(drawStatus) { return <h1>It's A Draw! 🙈</h1>}
        return <h1> {player ? 'Player 1' : 'Player 2'} </h1>;
    }

    function handleClick({i}){
        if(board[i] !== '') return;
        const newBoard = [...board];
        newBoard[i] = player ? 'X' : 'O';
        setBoard(newBoard);
        setPlayer(!player);
    }


    function CreateGrid({ board }) {
        return board.map((el, i) => (
            <div key={i} onClick={() => handleClick({i})}>
                {el}
            </div>
        ));
    }


    return (
        <div className="Game">
            {titleCard({board, player})}
            <div className="container">
               <CreateGrid board={board} player={player} />
            </div>
        </div>
    )
}