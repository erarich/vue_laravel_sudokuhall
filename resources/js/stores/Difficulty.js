import { defineStore } from 'pinia'

export const useDifficultyStore = defineStore('difficulty', {
  state: () => ({ currentDifficulty: "easy", }),
  actions: {
    selectDifficulty(difficulty) {
      this.currentDifficulty = difficulty;
    }
  },
})