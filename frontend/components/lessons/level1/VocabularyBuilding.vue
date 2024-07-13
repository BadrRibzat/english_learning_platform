

<template>
  <div>
    <h1>Vocabulary Building</h1>
    <Flashcard v-for="word in vocabulary" :key="word" :title="word" :content="word" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const vocabulary = ref(['Adventure', 'Beautiful', 'Challenge', 'Delightful']);
</script>

