<template>
  <section class="game">
    <div v-if='!Verification.finalVerification' >
      <GameCompletion></GameCompletion>
    </div>
    <div v-else class="board">
      <template v-for="(item, index) in boardArray" :key="item">
        <div 
          class="tile"
          v-on:click="selectTile(index)">
          {{ item }}
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { useNumberSelectorStore } from '../../stores/NumberSelector.js'
import { useMistakesStore } from '../../stores/Mistakes.js'
import { useVerificationStore } from '../../stores/Verification.js'
import { generateComplete } from '../utils/GenerateSudoku.js'
import GameCompletion from './GameCompletion.vue'

const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}

export default {
  props: ['difficulty'],
  components: {
    GameCompletion
  },
  data() {
    const { boardObject, arrayWithIndexOfEmptyElements } = generateComplete(this.difficulty);
    return {
      NumberSelector: useNumberSelectorStore(),
      Mistakes: useMistakesStore(),
      Verification: useVerificationStore(),
      boardArray: boardObject.boardArray,
      solutionArray: boardObject.solutionArray,
      arrayWithIndexOfEmptyElements: arrayWithIndexOfEmptyElements,
    }
  },
  methods: {
    selectTile: function (index) {
      const NumberSelector = useNumberSelectorStore()
      const Mistakes = useMistakesStore()
      const Verification = useVerificationStore()
      let selNumberString

      try {
        selNumberString = NumberSelector.numSelected.toString()
      } catch (e) {
        return selNumberString
      }

      if (NumberSelector.numSelected !== null) {
        if (this.boardArray[index] === '') {
          if (selNumberString === this.solutionArray[index]) {
            this.boardArray[index] = selNumberString
            let verification = compareArrays(this.boardArray, this.solutionArray)
            if (verification === true) {
              Verification.toggleVerification()
            }
          } else {
            Mistakes.increment()
          }
        }
      }
    }
  },
  created() {
    this.$watch(() => this.boardArray, (newValue) => {
      this.boardArray = [...newValue]
    })
  }
}
</script>
