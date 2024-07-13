

<template>
  <div>
    <h1>Public Speaking</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the most important aspect of public speaking?',
  options: ['Voice Projection', 'Content', 'Body Language'],
  answer: 'Content'
};
</script>

