<!--frontend/src/components/Level2/Lesson3/GrammarComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Grammar: Comparatives and Superlatives</h2>
    <div v-html="grammarContent"></div>
  </div>
</template>

<script>
import grammarContent from '@/content/level2/lesson3/grammar.md';

export default {
  data() {
    return {
      grammarContent
    };
  }
};
</script>

<style scoped>
</style>
