<template>
  <div class="gameTimer">
    <div>
      <p>Timer</p>
      <h4>{{ timer.formattedTime }}</h4>
    </div>
    <button v-if="timer.isPaused" @click="timer.start()">Resume</button>
    <button v-else @click="timer.pause()">Pause</button>
  </div>
</template>

<script>
import { useTimerStore } from '../../../stores/Timer.js'

export default {
  name: 'Timer',
  setup() {
    const timer = useTimerStore()

    // increment timer every second
    setInterval(() => {
      if (!timer.isPaused) {
        timer.increment()
      }
    }, 1000)

    return { timer }
  }
}
</script>