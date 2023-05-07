import { defineStore } from 'pinia'

export const useTimerStore = defineStore({
  id: 'timer',
  state: () => ({
    seconds: 0,
    isPaused: false
  }),
  actions: {
    increment() {
      this.seconds += 1
    },
    reset() {
      this.seconds = 0
      this.isPaused = true
    },
    pause() {
      this.isPaused = true
    },
    start() {
      this.isPaused = false
    }
  },
  getters: {
    formattedTime() {
      let hours = Math.floor(this.seconds / 3600)
      let minutes = Math.floor((this.seconds % 3600) / 60)
      let seconds = this.seconds % 60
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  }
})
