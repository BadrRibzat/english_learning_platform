

<template>
  <div>
    <h1>Parts of Speech</h1>
    <Flashcard v-for="part in partsOfSpeech" :key="part" :title="part" :content="part" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const partsOfSpeech = ref(['Noun', 'Pronoun', 'Verb', 'Adjective']);
</script>

