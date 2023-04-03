<template>
  <div class="gameNumberSelector">
    <div id="digits">
      <template v-for="number in numbers">
        <div 
          class="number" :class="{ inactive: isInactive }" 
          v-on:click="() => {NumberSelector.changeNumSelected(number.id)}">
          {{ number.id }}
        </div>
      </template>
      <p>Current number: {{ NumberSelector.numSelected }}</p>
    </div>
  </div>
</template>

<script>
import { useNumberSelectorStore } from '../../../stores/NumberSelector.js'

const numbers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]

export default {
  data() {
    return {
      numbers,
      isInactive: true,
      NumberSelector: useNumberSelectorStore()

    }
  },
}


</script>