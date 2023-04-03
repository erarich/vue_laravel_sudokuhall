<template>
  <section>
    <div class="gameOptions">
      <GameNumberSelector></GameNumberSelector>
      <!-- <GameDifficulty></GameDifficulty> -->
      <div class='gameMisTimer'>
        <GameMistakes></GameMistakes>
        <!-- <GameTimer></GameTimer> -->
      </div>
      <!-- <GameExtraActions></GameExtraActions> -->
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