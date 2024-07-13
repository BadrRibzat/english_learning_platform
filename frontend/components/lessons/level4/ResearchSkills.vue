

<template>
  <div>
    <h1>Research Skills</h1>
    <Flashcard v-for="skill in researchSkills" :key="skill" :title="skill" :content="skill" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const researchSkills = ref(['Finding Reliable Sources', 'Taking Notes', 'Citing Sources']);
</script>

