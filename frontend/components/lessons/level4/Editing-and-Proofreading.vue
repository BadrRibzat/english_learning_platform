

<template>
  <div>
    <h1>Editing and Proofreading</h1>
    <Flashcard v-for="tip in editingTips" :key="tip" :title="tip" :content="tip" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const editingTips = ref(['Check for Spelling Errors', 'Ensure Clarity', 'Verify Consistency']);
</script>

