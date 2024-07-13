

<template>
  <div>
    <h1>Grammar Rules</h1>
    <Flashcard v-for="rule in grammarRules" :key="rule" :title="rule" :content="rule" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const grammarRules = ref(['Subject-Verb Agreement', 'Verb Tenses', 'Pronoun Case']);
</script>

