<template>
  <div>
    <div id="digits">
      <template v-for="number in numbers">
        <div 
          v-on:click="() => {NumberSelector.changeNumSelected(number.id)}"
          class="number" :class="NumberSelector.numSelected === number.id ? active : 'inactive'" >
          {{ number.id }}
        </div>
      </template>
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
      active: 'active',
      NumberSelector: useNumberSelectorStore()

    }
  },
}


</script>