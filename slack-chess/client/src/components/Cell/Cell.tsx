import React from 'react';
import './cell-styles.css';
import { isLightSquare } from '../../functions/';

interface CellProps {
    cell: { pos: string };
    index: number;
}

const Cell: React.FC<CellProps> = ({ cell, index }) => {
    const light: boolean = isLightSquare(cell.pos, index);

    return <div className={`cell ${light ? 'light' : 'dark'}`}>{cell.pos}</div>;
};

export default Cell;
