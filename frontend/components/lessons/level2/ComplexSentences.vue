

<template>
  <div>
    <h1>Complex Sentences</h1>
    <Flashcard v-for="sentence in complexSentences" :key="sentence" :title="sentence" :content="sentence" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const complexSentences = ref(['Although it was raining, I went for a walk.', 'If you study hard, you will pass the exam.']);
</script>

