

<template>
  <div>
    <h1>Creative Writing</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the key element of creative writing?',
  options: ['Imagination', 'Grammar', 'Punctuation'],
  answer: 'Imagination'
};
</script>

