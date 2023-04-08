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
import { useDifficultyStore } from '../../stores/Difficulty.js'
import { generateComplete } from '../utils/GenerateSudoku.js'
import GameCompletion from './GameCompletion.vue'

let Difficulty = useDifficultyStore.currentDifficulty

let puzzleObject = generateComplete(Difficulty)
let boardObject = puzzleObject.boardObject
let arrayWithIndexOfEmptyElements = puzzleObject.arrayWithIndexOfEmptyElements

const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}

export default {
  components: {
    GameCompletion
  },
  data() {
    return {
      NumberSelector: useNumberSelectorStore(),
      Mistakes: useMistakesStore(),
      Verification: useVerificationStore(),
      boardArray: [...boardObject.boardArray], // Criar uma propriedade reativa para armazenar boardObject.boardArray
    }
  },
  methods: {
    selectTile: function (index) {
      const NumberSelector = useNumberSelectorStore()
      const Mistakes = useMistakesStore()
      const Verification = useVerificationStore()
      let selNumberString

      console.log(this.boardArray)

      try {
        selNumberString = NumberSelector.numSelected.toString()
      } catch (e) {
        return selNumberString
      }

      if (NumberSelector.numSelected !== null) {
        if (this.boardArray[index] === '') {
          if (selNumberString === boardObject.solutionArray[index]) {
            this.boardArray[index] = selNumberString
            let verification = compareArrays(this.boardArray, boardObject.solutionArray)
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
    // Adicione um watcher em boardObject.boardArray para atualizar a propriedade reativa "boardArray" sempre que houver uma mudança
    this.$watch(() => boardObject.boardArray, (newValue) => {
      this.boardArray = [...newValue]
    })
  }
}
</script>
