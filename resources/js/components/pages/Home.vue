<template>
  <Header></Header>
  <div class="innerContainer">
    <GameSection></GameSection>
    <GameOptionsSection></GameOptionsSection>
  </div>
  <div>
    <h1>Links</h1>
    <router-link class="menu__link" to="/easy">
      <button class="menu--button" type="button">Easy</button>
    </router-link>
    <router-link class="menu__link" to="/medium">
      <button class="menu--button" type="button">Medium</button>
    </router-link>
    <router-link class="menu__link" to="/hard">
      <button class="menu--button" type="button">Hard</button>
    </router-link>
    <router-link class="menu__link" to="/veryhard">
      <button class="menu--button" type="button">VeryHard</button>
    </router-link>
    <router-link class="menu__link" to="/insane">
      <button class="menu--button" type="button">Insane</button>
    </router-link>
    <router-link class="menu__link" to="/inhuman">
      <button class="menu--button" type="button">Inhuman</button>
    </router-link>
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