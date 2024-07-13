

<template>
  <div>
    <h1>Reading Comprehension</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the main idea of the story?',
  options: ['The cat is hungry.', 'The cat is sleepy.', 'The cat is playful.'],
  answer: 'The cat is playful.'
};
</script>

