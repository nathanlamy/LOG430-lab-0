<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const colors = ['red', 'green', 'blue', 'orange', 'purple']

const currentColor = ref('black')

function toggleColor() {
  let newColor
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)]
  } while (newColor === currentColor.value)

  currentColor.value = newColor
}
</script>

<template>
  <h1 class="msg" :style="{ color: currentColor }">{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="toggleColor">Toggle color</button>
  </div>
</template>

<style scoped>
.card {
  margin-top: 1em;
}

button {
  padding: 0.5em 1em;
  font-weight: bold;
}
</style>
