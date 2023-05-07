<template>
  <Header></Header>
  <div class="signup-forms">
    <h1>LOGIN</h1>
    <v-text-field label="E-mail"></v-text-field>
    <v-text-field label="Password"></v-text-field>
    <v-btn>SUBMIT</v-btn>
  </div>
  
</template>

<script>
import Header from '../layouts/Header.vue';

export default {
  components: {
    Header,
  }
}


</script>