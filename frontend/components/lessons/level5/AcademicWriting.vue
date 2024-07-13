

<template>
  <div>
    <h1>Academic Writing</h1>
    <Flashcard v-for="style in academicStyles" :key="style" :title="style" :content="style" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const academicStyles = ref(['Formal Tone', 'Citation of Sources', 'Objective Analysis']);
</script>

