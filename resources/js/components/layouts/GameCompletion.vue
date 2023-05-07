<template>
  <div class="CompletionBox">
    <h1 class="CompletionBoxh1">CONGRATULATIONS!</h1>
    <h2>You have completed the puzzle.</h2>
    <div class="CompletionBox2">
      <div class="CompletionBoxList">
        <ul class="CompletionBoxListUL">
          <li>Difficulty</li>
          <li>Mistakes</li>
          <li>Time</li>
        </ul>
      </div>
      <div class="CompletionBoxListValues">
        <ul class="CompletionBoxListUL">
          <li>{{ Difficulty.currentDifficulty }}</li>
          <li>{{ Mistakes.mistakes }}</li>
          <li>{{ Time.formattedTime }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useDifficultyStore } from '../../stores/Difficulty.js'
import { useMistakesStore } from '../../stores/Mistakes.js'
import { useTimerStore } from '../../stores/Timer.js'

export default {
  data() {
    return {
      Mistakes: useMistakesStore(),
      Difficulty: useDifficultyStore(),
      Time: useTimerStore(),
    }
  },
}


</script>