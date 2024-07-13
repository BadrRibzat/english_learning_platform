

<template>
  <div>
    <h1>Vocabulary Expansion</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the meaning of "ubiquitous"?',
  options: ['Everywhere', 'Rare', 'Expensive'],
  answer: 'Everywhere'
};
</script>

