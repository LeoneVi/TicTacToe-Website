import '../styles/Game.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Board from '../utils/Board.js';

export default function Game() {

    const len = 3;
    const [boardInstance, setBoardInstance] = useState(new Board(len));
    const [player, setPlayer] = useState(true); // Player 1 = true, Player 2 = false
    const [gameOver, setGameOver] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if ((boardInstance.isDraw() || boardInstance.isWin()) && !gameOver) {
            setGameOver(true);
        }
    }, [boardInstance, gameOver]);

    useEffect(() => {
        if (gameOver) {
            const timeout = setTimeout(() => {
                navigate('/retry');
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [gameOver, navigate]);


    function handleClick(i){
        if(gameOver || boardInstance.getBoard()[i] !== '') return;
        const newBoardArr = boardInstance.getBoard();
        newBoardArr[i] = boardInstance.getPlayerSymbol(player);
        const newBoardInstance = new Board(len);
        newBoardInstance.setBoard(newBoardArr);
        setBoardInstance(newBoardInstance);
        setPlayer(!player);
    }


    function CreateGrid() {
        return boardInstance.getBoard().map((el, i) => (
            <div onClick={() => handleClick(i)}>
               {el}
            </div>
        ));
    }

    function TitleCard() {
        if (boardInstance.isWin()) return <h1>🎉 {!player ? 'Player 1' : 'Player 2'} Wins 🎉</h1>;
        if (boardInstance.isDraw()) return <h1>It's A Draw! 🙈</h1>;
        return <h1>{player ? 'Player 1' : 'Player 2'}</h1>;
    }

    return (
        <div className="Game">
            <TitleCard/>
            <div className="container">
               <CreateGrid player={player} />
            </div>
        </div>
    )
}