import { defineStore } from 'pinia'

export const useNumberSelectorStore = defineStore('selectedNumbers', {
  state: () => ({ numSelected: null, }),
  getters: {

  },
  actions: {
    changeNumSelected(number) {
      this.numSelected = number
    }
  },
})