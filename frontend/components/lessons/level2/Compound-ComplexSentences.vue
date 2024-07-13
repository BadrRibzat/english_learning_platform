

<template>
  <div>
    <h1>Compound-Complex Sentences</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'Which is a compound-complex sentence?',
  options: ['I went to the store, and I bought milk.', 'Although it was raining, I went for a walk, and I saw a cat.', 'I went to the store. I bought milk.'],
  answer: 'Although it was raining, I went for a walk, and I saw a cat.'
};
</script>

