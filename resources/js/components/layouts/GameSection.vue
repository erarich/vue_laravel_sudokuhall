<template>
  <section class="game">
    <div v-if='!Verification.finalVerification' >
      <GameCompletion></GameCompletion>
    </div>
    <div v-else class="board">
      <template v-for="(item, index) in puzzle">
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
import { usePuzzleStore } from '../../stores/Puzzle.js'
import { useVerificationStore } from '../../stores/Verification.js'
import GameCompletion from './GameCompletion.vue'

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
      Verification: useVerificationStore()
    }
  },
  computed: {
    puzzle() {
      return usePuzzleStore().sudokuPuzzle
    }
  },
  methods: {
    selectTile: function (index) {
      const NumberSelector = useNumberSelectorStore()
      const Mistakes = useMistakesStore()
      const Puzzle = usePuzzleStore()
      const Verification = useVerificationStore()
      let selNumberString

      try {
        selNumberString = NumberSelector.numSelected.toString()
      } catch (e) {
        return selNumberString
      }

      if (NumberSelector.numSelected !== null) {
        if (Puzzle.sudokuPuzzle[index] === '') {
          if (selNumberString === Puzzle.sudokuSolution[index]) {
            Puzzle.updatePuzzle(index, selNumberString)
            let verification = compareArrays(Puzzle.sudokuPuzzle, Puzzle.sudokuSolution)
            if (verification === true) {
              Verification.toggleVerification()
            }
          } else {
            Mistakes.increment()
          }
        }
    }

    }
  }
}


</script>