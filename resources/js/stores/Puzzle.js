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
  actions: {
    updatePuzzle(index, number) {
      this.sudokuPuzzle[index] = number
    }
  },
})