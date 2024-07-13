<!--frontend/pages/lessons/level1/AlphabetBasics.vue-->

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Alphabet Basics</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div v-for="letter in alphabet" :key="letter" class="bg-white shadow-md rounded-lg p-4 text-center">
        <p class="text-4xl font-bold">{{ letter.toUpperCase() }}</p>
        <p class="text-2xl mt-2">{{ letter.toLowerCase() }}</p>
        <button @click="playSound(letter)" class="mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
          Listen
        </button>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Practice</h2>
      <div class="flex items-center space-x-4">
        <input v-model="userInput" @keyup.enter="checkAnswer" type="text" class="border rounded p-2" placeholder="Type the letter you hear">
        <button @click="playRandomLetter" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Play Random Letter
        </button>
      </div>
      <p v-if="feedback" class="mt-4" :class="{ 'text-green-600': isCorrect, 'text-red-600': !isCorrect }">
        {{ feedback }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const userInput = ref('')
const feedback = ref('')
const isCorrect = ref(false)
const currentLetter = ref('')

const playSound = (letter) => {
  // In a real application, you would play the sound of the letter here
  console.log(`Playing sound for letter: ${letter}`)
}

const playRandomLetter = () => {
  currentLetter.value = alphabet[Math.floor(Math.random() * alphabet.length)]
  playSound(currentLetter.value)
  userInput.value = ''
  feedback.value = ''
}

const checkAnswer = () => {
  if (userInput.value.toLowerCase() === currentLetter.value) {
    feedback.value = 'Correct!'
    isCorrect.value = true
  } else {
    feedback.value = `Incorrect. The correct letter was ${currentLetter.value.toUpperCase()}.`
    isCorrect.value = false
  }
}
</script>

<style scoped>
.lesson-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.flashcards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.flashcard {
  width: 200px;
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
}

.flashcard-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flashcard:hover .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flashcard-front {
  background-color: #4f46e5;
  color: white;
}

.flashcard-back {
  background-color: #3c3799;
  color: white;
  transform: rotateY(180deg);
}

.exercise {
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #4f46e5;
  border-radius: 10px;
}

.option {
  margin: 10px 0;
}

button {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3c3799;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}
</style>

