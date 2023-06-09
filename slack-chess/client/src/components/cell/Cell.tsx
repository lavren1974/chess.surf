import React from 'react';
import './cell-styles.css';
import { isLightSquare, Cell as BoardCell } from '../../functions';
import Piece from '../piece/Piece';

interface CellProps {
    cell: {
        pos: string,
        piece?: string
    };
    index: number;
}

const Cell: React.FC<CellProps> = ({ cell, index }) => {

    //console.log("cell: ", cell);
    // console.log("index: ", index);
    // const light: boolean = isLightSquare(cell.pos, index);

    // return <div className={`cell ${light ? 'light' : 'dark'}`}>{cell.pos}</div>;

    const light = isLightSquare(cell.pos, index);
    // console.log("light: ", light);

    return (
        <div className={`cell ${light ? 'light' : 'dark'}`}>
            <Piece pos={cell.pos} name={cell.piece} />
        </div>
    );

    // return (
    //     <div>
    //         {cell.piece === "" ? (
    //             <p>The piece is an empty string.</p>
    //         ) : (
    //             <div className={`cell ${light ? 'light' : 'dark'}`}>
    //                 <Piece pos={cell.pos} name={cell.piece} />
    //             </div>
    //         )}
    //     </div>
    // );
};

export default Cell;
