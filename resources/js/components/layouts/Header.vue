<template>
  <header class="header">
    <router-link class="header--links" to="/">
      <div class="header__home-link">
        <span className="header__logo">SUDOKUHALL</span>
      </div>
    </router-link>
    <Menu></Menu>
  </header>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    Menu,
  }
}

</script>