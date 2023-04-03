<template>
  <Header></Header>
  <div class="innerContainer">
    <GameSection></GameSection>
    <GameOptionsSection></GameOptionsSection>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue';
import GameSection from '../layouts/GameSection.vue';
import GameOptionsSection from '../layouts/GameOptionsSection.vue';

export default {
  components: {
    Header,
    GameSection,
    GameOptionsSection
  }
}


</script>