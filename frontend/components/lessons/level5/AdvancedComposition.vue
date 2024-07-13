

<template>
  <div>
    <h1>Advanced Composition</h1>
    <Flashcard v-for="technique in advancedTechniques" :key="technique" :title="technique" :content="technique" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const advancedTechniques = ref(['Complex Sentence Structure', 'Advanced Vocabulary', 'Metaphorical Language']);
</script>

