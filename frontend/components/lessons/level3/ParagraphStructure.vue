

<template>
  <div>
    <h1>Paragraph Structure</h1>
    <Flashcard v-for="structure in paragraphStructures" :key="structure" :title="structure" :content="structure" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const paragraphStructures = ref(['Topic Sentence', 'Supporting Details', 'Conclusion Sentence']);
</script>

