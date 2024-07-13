

<template>
  <div>
    <h1>Rhetoric and Persuasion</h1>
    <Flashcard v-for="technique in rhetoricTechniques" :key="technique" :title="technique" :content="technique" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const rhetoricTechniques = ref(['Ethos', 'Pathos', 'Logos']);
</script>

