import { defineStore } from 'pinia'

export const useMistakesStore = defineStore('mistakes', {
  state: () => ({ mistakes: 0, }),
  actions: {
    increment() {
      this.mistakes++;
    },
    setInitialValue() {
      this.mistakes = 0;
    } 
  },
})