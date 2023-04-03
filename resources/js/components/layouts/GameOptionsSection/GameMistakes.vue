<template>
  <div class="gameMistakes">
    <p>Mistakes</p>
    <h4>{{ Mistakes.mistakes }}</h4>
  </div>
</template>

<script>
import {useMistakesStore} from '../../../stores/Mistakes.js';


export default {
  data() {
    return {
      Mistakes: useMistakesStore()
    }
  },
}


</script>