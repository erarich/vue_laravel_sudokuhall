<template>
  <Header></Header>
  <form @submit.prevent="createAccount">
    <div class="signup-forms">
      <h1>SIGNUP</h1>
      <v-text-field label="Name"></v-text-field>
      <v-text-field label="E-mail"></v-text-field>
      <v-text-field label="Password"></v-text-field>
      <v-btn type="submit">SUBMIT</v-btn>
    </div>
  </form>
</template>

<script>
import Header from '../layouts/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    createAccount() {
      this.axios
        .post('http://127.0.0.1:8000/add', this.user)
        .then(response => (
          this.$router.push({name: 'home'})
        ))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    }
  }
}

</script>