import React from 'react';
import './piece-styles.css';

interface PieceProps {
    name: string;
    pos: string;
}

const Piece: React.FC<PieceProps> = ({ name, pos }) => {
    const color = name === name.toUpperCase() ? 'w' : 'b';
    const imageName = color + name.toUpperCase();
    let image;

    try {
        image = `../../assets/pieces/${imageName}.png`;
    } catch (error) {
        image = '../../assets/pieces/empty.png'; //an empty fallback image
    }

    return (
        <img
            className="piece"
            src={image}
            alt=""
            draggable={true}
        />
    );
};

export default Piece;
