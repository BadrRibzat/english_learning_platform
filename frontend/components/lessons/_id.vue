<!-- frontend/pages/lessson/_id.vue-->

<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-10">
      <h1 class="text-4xl font-bold mb-4">{{ lesson.title }}</h1>
      <div v-html="lesson.content" class="lesson-content mb-6"></div>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Flashcards</h2>
      <div class="flex flex-wrap -mx-2">
        <Flashcard v-for="card in lesson.flashcards" :key="card.front" :front="card.front" :back="card.back" class="w-1/2 px-2 mb-4" />
      </div>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Quiz</h2>
      <Quiz :quiz="lesson.quiz" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Flashcard from '~/components/Flashcard.vue'
import Quiz from '~/components/Quiz.vue'

const route = useRoute()

const lessons = {
  1: {
    title: 'Alphabet Basics',
    content: '<p>Content for Alphabet Basics.</p>',
    flashcards: [
      { front: 'A', back: 'Apple' },
      { front: 'B', back: 'Banana' }
    ],
    quiz: {
      question: 'What does "A" stand for?',
      options: ['Apple', 'Banana', 'Cat'],
      answer: 'Apple'
    }
  },
  //  Other lessons similarly...
}

const lesson = computed(() => lessons[route.params.id])
</script>


<style scoped>
.lesson-content {
  /* styles for lesson content goes here */
}
</style>

