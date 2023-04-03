<template>
  <nav class="menu">
    <ul class="menu__list-user">
      <li class="menu__item">
        <router-link class="menu__link" to="/profile">
          <button class="menu--button" type="button">Profile</button>
        </router-link>
      </li>

      <li class="menu__item">
        <router-link class="menu__link" to="/login">
          <button class="menu--button" type="button">Log In</button>
        </router-link>
      </li>

      <li class="menu__item">
        <router-link class="menu__link" to="/signup">
          <button class="menu--button" type="button">Sign Up</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>