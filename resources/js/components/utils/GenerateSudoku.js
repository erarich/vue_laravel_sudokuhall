import SudokuToolCollection from "sudokutoolcollection";

const sudoku = SudokuToolCollection();

export const generateSudoku = (Difficulty) => {

  const board = sudoku.generator.generate(Difficulty)
  const solution = sudoku.solver.solve(board);
  const boardArray = board.split("");
  const solutionArray = solution.split("");

  return {
    boardArray: boardArray,
    solutionArray: solutionArray,
  }
}

export const clearDots = (obj) => {
  const boardArray = obj.boardArray.map(char => char === '.' ? '' : char);
  return { ...obj, boardArray };
}

export function findEmptyElements(boardArray) {
  const initialEmptyElements = [];
  boardArray.forEach((element, index) => {
    if (element === '') {
      initialEmptyElements.push(index);
    }
  });
  return initialEmptyElements;
}

export const generateComplete = (Difficulty) => {

  const sudokuObject = generateSudoku(Difficulty)
  const sudokuObjectwithEmptyElements = clearDots(sudokuObject)
  const arrayWithIndexOfEmptyElements = findEmptyElements(sudokuObjectwithEmptyElements.boardArray)

  return {
    boardObject: sudokuObjectwithEmptyElements,
    arrayWithIndexOfEmptyElements: arrayWithIndexOfEmptyElements,
  }
}