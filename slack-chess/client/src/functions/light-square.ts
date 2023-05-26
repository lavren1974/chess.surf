/**
 * @param {string} position The position of the cell e.g a1
 * @param {number} index.
 * @returns {boolean} true if a square/cell should be labelled as light
  based on its index
 */
  export const isLightSquare = (position: string, index: number): boolean => {
    const row: string = position[1];
    const isEven = (x: number): boolean => !(x % 2);

    if (isEven(Number(row)) && !isEven(index + 1)) {
        return true;
    }

    if (isEven(index + 1) && !isEven(Number(row))) {
        return true;
    }
    return false;
};
