<!--Updated frontend/components/Flashcard.vue -->

<template>
  <div>
    <h1>Flashcards</h1>
    <div v-if="flashcards">
      <div v-for="flashcard in flashcards" :key="flashcard.id">
        <h2>{{ flashcard.title }}</h2>
        <p>{{ flashcard.content }}</p>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const flashcards = ref(null)

onMounted(async () => {
  const response = await fetch('http://localhost:8000/api/flashcards')
  const data = await response.json()
  flashcards.value = data
})
</script>

<!--Updated Styles for frontend/components/Flashcard.vue -->

<style scoped>
.flashcard {
  perspective: 1000px;
  margin: 20px 0;
}
.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px #134e4a;
}
.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}
.flashcard-front, .flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.flashcard-front {
  background-color: #a1a1aa;
  color: #3f3f46;
}
.flashcard-back {
  background-color: #71717a;
  color: white;
  transform: rotateY(180deg);
}
</style>

