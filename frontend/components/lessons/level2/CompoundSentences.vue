

<template>
  <div>
    <h1>Compound Sentences</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'Which is a compound sentence?',
  options: ['I went to the store; I bought milk.', 'I went to the store. I bought milk.', 'I went to the store, I bought milk.'],
  answer: 'I went to the store; I bought milk.'
};
</script>

