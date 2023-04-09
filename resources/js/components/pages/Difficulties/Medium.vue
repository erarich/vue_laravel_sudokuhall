<template>
  <Header></Header>
  <div class="innerContainer">
    <GameSection difficulty="Difficulty.currentDifficulty"></GameSection>
    <GameOptionsSection></GameOptionsSection>
  </div>
</template>

<script lang="js">
import Header from '../../layouts/Header.vue';
import GameSection from '../../layouts/GameSection.vue';
import GameOptionsSection from '../../layouts/GameOptionsSection.vue';
import { useDifficultyStore } from '../../../stores/Difficulty'

export default {
  components: {
    Header,
    GameSection,
    GameOptionsSection
  },
  data() {
    return {
      Difficulty: useDifficultyStore()
    }
  },
}


</script>