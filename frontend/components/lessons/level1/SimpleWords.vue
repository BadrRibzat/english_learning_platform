

<template>
  <div>
    <h1>Simple Words</h1>
    <Flashcard v-for="word in simpleWords" :key="word" :title="word" :content="word" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const simpleWords = ref(['Cat', 'Dog', 'Sun', 'Moon']);
</script>

