

<template>
  <div>
    <h1>Plurals and Possessives</h1>
    <Flashcard v-for="word in pluralsPossessives" :key="word" :title="word" :content="word" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const pluralsPossessives = ref(['Cats', "Cat's", 'Dogs', "Dog's"]);
</script>

