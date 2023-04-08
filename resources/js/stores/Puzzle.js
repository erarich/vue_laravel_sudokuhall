import { defineStore } from 'pinia'
import { sudokuObjectwithEmptyElements, arrayWithIndexOfEmptyElements } from '../components/utils/GenerateSudoku.js';

const sudokuObject = sudokuObjectwithEmptyElements
const sudokuPuzzle = sudokuObject.boardArray
const sudokuSolution = sudokuObject.solutionArray
const arrayWithEmptyPositions = arrayWithIndexOfEmptyElements

export const usePuzzleStore = defineStore('puzzle', {
  state: () => ({ 
    sudokuPuzzle: sudokuPuzzle,
    sudokuSolution: sudokuSolution,
    arrayWithEmptyPositions: arrayWithEmptyPositions,
  }),
  mutations: {
    updateSudokuPuzzle(newValue) {
      this.sudokuPuzzle = newValue
    },
    updateSudokuSolution(newValue) {
      this.sudokuSolution = newValue
    },
    updateArrayWithEmptyPositions(newValue) {
      this.arrayWithEmptyPositions = newValue
    },
  },
  actions: {
    updatePuzzle(index, number) {
      this.sudokuPuzzle[index] = number
    },
    updateAllStates(sudokuPuzzle, sudokuSolution, arrayWithEmptyPositions) {
      this.updateSudokuPuzzle(sudokuPuzzle)
      this.updateSudokuSolution(sudokuSolution)
      this.updateArrayWithEmptyPositions(arrayWithEmptyPositions)
    },
  },
})