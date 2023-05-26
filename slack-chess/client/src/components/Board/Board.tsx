import React from 'react';
import './board-styles.css';

interface Cell {
    pos: string;
}

interface BoardProps {
    cells: Cell[];
}

const Board: React.FC<BoardProps> = ({ cells }) => {
    return (
        <div className="board">
            {cells.map((cell) => (
                <div key={cell.pos}>{cell.pos}</div>
            ))}
        </div>
    );
};

export default Board;
