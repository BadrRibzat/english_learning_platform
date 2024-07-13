

<template>
  <div>
    <h1>Literary Analysis</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the main purpose of literary analysis?',
  options: ['To summarize the story', 'To interpret and understand the deeper meaning', 'To find grammatical errors'],
  answer: 'To interpret and understand the deeper meaning'
};
</script>

