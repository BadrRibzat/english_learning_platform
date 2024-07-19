<!--frontend/src/components/Level2/Lesson1/GrammarComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Grammar: Present Perfect Tense</h2>
    <div v-html="grammarContent"></div>
  </div>
</template>

<script>
import grammarContent from '@/content/level2/lesson1/grammar.md';

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
