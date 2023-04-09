<template>
  <div class="GameDifficulty">
    <p>new game</p>
    <div>
      <span>Difficulty: </span>
      <select v-model="Difficulty.currentDifficulty" name="select" @change="handleChange($event)">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="veryhard">Very-Hard</option>
        <option value="insane">Insane</option>
        <option value="inhuman">Inhuman</option>
      </select>
    </div>

  </div>

</template>

<script lang="js">
import { useDifficultyStore } from '../../../stores/Difficulty.js'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      Difficulty: useDifficultyStore()
    }
  },
  methods: {
    handleChange(e) {
      this.Difficulty.selectDifficulty(e.target.value)
      this.router.push(`/${e.target.value}`)
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
}
</script>