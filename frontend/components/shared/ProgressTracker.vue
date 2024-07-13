<!--Updated Styles for frontend/components/ProgressTracker.vue-->

<template>
  <div>
    <h1>Progress Tracker</h1>
    <div v-if="progress">
      <div v-for="(value, key) in progress" :key="key">
        <p>{{ key }}: {{ value }}%</p>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const progress = ref(null)

onMounted(async () => {
  const response = await fetch('http://localhost:8000/api/progress')
  const data = await response.json()
  progress.value = data
})
</script>


<style scoped>
.container {
  background-color: #d4d4d8;
  border-radius: 8px;
  box-shadow: 0 4px 8px #134e4a;
  padding: 20px;
}
h2 {
  color: #6b7280;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: #a1a1aa;
  color: #3f3f46;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #134e4a;
}
</style>

