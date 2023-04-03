<template>
  <Header></Header>
  <div class="profile">
    <aside class="aside profile-stats">
      <span>{User's Name}</span>
      <span>{Username}</span>
      <span>Puzzles played: {integer}</span>
      <span>Time spent playing: {string}</span>
      <span>Rating: {float}</span>
      <v-btn>EDIT PROFILE</v-btn>
    </aside>
    <div class="profile-puzzles">
      <v-card>
        <v-tabs
          v-model="tab"
          bg-color="secundary"
        >
          <v-tab value="one">COMPLETED</v-tab>
          <v-tab value="two">UNCOMPLETED</v-tab>
          <v-tab value="three">SAVED</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              Empty list.
            </v-window-item>

            <v-window-item value="two">
              Empty list.
            </v-window-item>

            <v-window-item value="three">
              Empty list.
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue';

export default {
  components: {
    Header,
  },
  data: () => ({
      tab: null,
    }),
}


</script>