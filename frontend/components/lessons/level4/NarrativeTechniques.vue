

<template>
  <div>
    <h1>Narrative Techniques</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is a narrative technique?',
  options: ['A way to structure a story', 'A type of punctuation', 'A grammar rule'],
  answer: 'A way to structure a story'
};
</script>

