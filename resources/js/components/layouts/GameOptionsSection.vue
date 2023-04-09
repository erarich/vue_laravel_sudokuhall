<template>
  <section class="gameOptions">
    <div>
      <GameNumberSelector></GameNumberSelector>
      <div>
        <GameMistakes></GameMistakes>
        <!-- <GameTimer></GameTimer> -->
      </div>
      <!-- <GameExtraActions></GameExtraActions> -->
      <GameDifficulty></GameDifficulty>
    </div>
  </section>
</template>

<script>
import GameNumberSelector from './GameOptionsSection/GameNumberSelector.vue'
import GameDifficulty from './GameOptionsSection/GameDifficulty.vue'
import GameMistakes from './GameOptionsSection/GameMistakes.vue'
import GameTimer from './GameOptionsSection/GameTimer.vue'
import GameExtraActions from './GameOptionsSection/GameExtraActions.vue'

export default {
  components: {
    GameNumberSelector,
    GameDifficulty,
    GameMistakes,
    GameTimer,
    GameExtraActions
  }
}


</script>