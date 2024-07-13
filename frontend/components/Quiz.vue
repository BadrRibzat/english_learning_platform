<!--Ypdated frontend/components/Quiz.vue -->
<template>
  <div class="quiz">
    <h2 class="text-2xl font-bold mb-4">{{ quiz.question }}</h2>
    <ul class="options">
      <li v-for="option in quiz.options" :key="option" @click="selectOption(option)" :class="getClass(option)">
        {{ option }}
      </li>
    </ul>
    <p v-if="selectedOption" class="mt-4">Selected: {{ selectedOption }}</p>
    <button v-if="selectedOption" @click="submitAnswer" class="submit-button mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    <p v-if="feedback" class="mt-4">{{ feedback }}</p>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['quiz'])
const selectedOption = ref(null)
const feedback = ref(null)

const selectOption = (option) => {
  selectedOption.value = option
}

const submitAnswer = () => {
  feedback.value = selectedOption.value === props.quiz.answer ? 'Correct!' : 'Incorrect. Try again!'
}

const getClass = (option) => {
  if (!feedback.value) return ''
  return option === props.quiz.answer ? 'correct' : 'incorrect'
}
</script>


<!--Updated Styles for frontend/components/Quiz.vue -->
<style scoped>
.quiz {
  background-color: #d4d4d8;
  border-radius: 8px;
  box-shadow: 0 4px 8px #134e4a;
  padding: 20px;
}
h2 {
  color: #6b7280;
}
.options li {
  background-color: #a1a1aa;
  color: #3f3f46;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #134e4a;
  transition: background-color 0.3s;
}
.options li:hover {
  background-color: #71717a;
}
.correct {
  background-color: #22d3ee;
  color: white;
}
.incorrect {
  background-color: #fecaca;
  color: #3f3f46;
}
.submit-button {
  background-color: #22d3ee;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.submit-button:hover {
  background-color: #134e4a;
}
</style>

