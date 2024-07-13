

<template>
  <div>
    <h1>Tenses</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What tense is "I will go"?',
  options: ['Present', 'Past', 'Future'],
  answer: 'Future'
};
</script>

