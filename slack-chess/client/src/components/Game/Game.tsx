import { useState, useRef, useEffect } from 'react';
import { Chess } from 'chess.js';
import { createBoard } from '../../functions';
import Board from '../Board/Board';

const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const Game: React.FC = () => {
    //   const [fen, setFen] = useState<string>(FEN);
    //   const chess = useRef<Chess>(new Chess(fen)).current;


    //   const makeMove = (from: string, to: string) => {
    //     const move = chess.move({ from, to });
    //     if (move) {
    //       const newFen = chess.fen();
    //       setFen(newFen);
    //     }
    //   };
    const [fen, setFen] = useState<string>(FEN);
    const { current: chess } = useRef(new Chess(fen));
    const [board, setBoard] = useState(createBoard(fen));
    // console.log("board: ", board);

    useEffect(() => {
        setBoard(createBoard(fen));
    }, [fen]);

    //const chess = useRef<Chess>(new Chess(fen)).current;

    return (
        <div className="game">
            <Board cells={board} />
        </div>
    );

    // return (
    //     <div>
    //         <button onClick={() => makeMove('e2', 'e4')}>Make Move</button>
    //   <p>{fen}</p>
    //     </div>
    // );
};

export default Game;
