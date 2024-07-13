

<template>
  <div>
    <h1>Letter Sounds</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What sound does the letter "A" make?',
  options: ['Ah', 'Ee', 'Oo', 'Uu'],
  answer: 'Ah'
};
</script>

