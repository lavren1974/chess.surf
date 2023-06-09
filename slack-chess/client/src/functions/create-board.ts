export class Cell {
    pos: string;
    piece: string;

    constructor(pos: string, piece: string) {
        this.pos = pos;
        this.piece = piece;
    }
}

//  returns an array of range 1, n
const range = (n: number): number[] => {
    return Array.from({ length: n }, (_, i) => i + 1);
};

/**
 *
 * @param {String} fenString rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
 * @returns {Cell[]}
 */

const translateFenString = (fen: string): string[] => {
    const fenPieces = fen.replace(/\//g, ""); // remove the row delimiters '/'
  
    const pieces: string[] = [];
  
    for (const char of fenPieces) {
      if (isNaN(parseInt(char))) {
        pieces.push(char);
      } else {
        const emptyCount = parseInt(char);
        for (let i = 0; i < emptyCount; i++) {
          pieces.push("");
        }
      }
    }
  
    return pieces;
  };

export const createBoard = (fenString: string): Cell[] => {

    
    const fen = fenString.split(' ')[0]; //Get the first portion
    
    const fenPieces = fen.split('/').join(''); //remove the row delimiters '/'
    
    //rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR
    console.log("fenPieces: ", fenPieces);

    const characterArray = translateFenString(fenPieces);
   console.log("characterArray: ", characterArray);


    let pieces = Array.from(fenPieces);
    console.log("pieces: ", pieces);
    //Save individual pieces for each of the 64 cells
    Array.from(fenPieces).forEach((item, index) => {
        // if (isFinite(parseInt(item))) {
        //     pieces.splice(index, 1, range(parseInt(item)).fill(''));
        // }
        // ChatGpt
        if (isFinite(Number(item))) {
            pieces.splice(index, 1, ...Array(Number(item)).fill(''));
        }
    });
    pieces = pieces.flat();

    const rows = range(8)
        .map((n) => n.toString())
        .reverse(); //["8", "7", "6", "5", "4", "3", "2", "1"]

    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const cells: string[] = []; //[a1, b1, c1..., h8]
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        for (let j = 0; j < columns.length; j++) {
            const col = columns[j];
            cells.push(col + row); //e.g a1, b1, c1...
        }
    }

    const board: Cell[] = [];
    for (let i = 0; i < cells.length; i++) {
        //'cells', and 'pieces' have the same length of 64
        const cell = cells[i];
        const piece = pieces[pieces.length - i - 1];
        board.push(new Cell(cell, piece));
    }

    return board;
};
