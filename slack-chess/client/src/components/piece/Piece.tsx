import React from 'react';
import './piece-styles.css';

interface PieceProps {
    pos: string;
    name: string;
}

const Piece: React.FC<PieceProps> = ({ pos, name }) => {

    //console.log("pos: ", pos);
    //console.log("name: ", name);
    const color = name === name.toUpperCase() ? 'w' : 'b';
    //console.log("name: ", name);
    const imageName = color + name.toUpperCase();
    let image;

    try {
        image = `../../assets/pieces/${imageName}.png`;
    } catch (error) {
        image = ''; //an empty fallback image
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
