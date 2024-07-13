

<template>
  <div>
    <h1>Argumentative Writing</h1>
    <Flashcard v-for="point in argumentativePoints" :key="point" :title="point" :content="point" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const argumentativePoints = ref(['Claim', 'Evidence', 'Counterargument']);
</script>

