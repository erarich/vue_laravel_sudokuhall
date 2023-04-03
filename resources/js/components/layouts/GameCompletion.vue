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
          <li>Score</li>
        </ul>
      </div>
      <div class="CompletionBoxListValues">
        <ul class="CompletionBoxListUL">
          <li>{Difficulty}</li>
          <li>{{ Mistakes.mistakes }}</li>
          <li>{Time}</li>
          <li>{Points}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useMistakesStore } from '../../stores/Mistakes.js'

export default {
  data() {
    return {
      Mistakes: useMistakesStore()
    }
  },
}


</script>