<!--Updated frontend/components/ProgressTracker.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold">Your Progress</h2>
    <ul class="mt-4">
      <li v-for="progress in progresses" :key="progress.lesson.id">
        {{ progress.lesson.title }} - {{ progress.completed ? 'Completed' : 'Incomplete' }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      progresses: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8000/api/progress')
    this.progresses = response.data
  }
}
</script>



<!--Updated Styles for frontend/components/ProgressTracker.vue-->

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


