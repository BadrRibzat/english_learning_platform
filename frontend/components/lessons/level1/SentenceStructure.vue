

<template>
  <div>
    <h1>Sentence Structure</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'Which sentence is correct?',
  options: ['Cat sleep.', 'The cat sleeps.', 'Cat sleeps.'],
  answer: 'The cat sleeps.'
};
</script>

