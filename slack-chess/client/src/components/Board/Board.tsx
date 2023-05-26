import React from 'react';
import './board-styles.css';
import Cell from '../Cell/Cell';

interface Cell {
    pos: string;
}

interface BoardProps {
    cells: Cell[];
}

const Board: React.FC<BoardProps> = ({ cells }) => {
    return (
        <div className="board">
            {cells.map((cell, index) => (
                <Cell cell={cell} index={index} key={cell.pos} />
            ))}
        </div>
    );
};

export default Board;
