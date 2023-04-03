import { defineStore } from 'pinia'

export const useVerificationStore = defineStore('verification', {
  state: () => ({ finalVerification: true, }),

  actions: {
    toggleVerification() {
      this.finalVerification = !this.finalVerification
    }
  },
})