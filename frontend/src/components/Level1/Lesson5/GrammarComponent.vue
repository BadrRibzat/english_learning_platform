<!--frontend/src/components/Level1/Lesson5/GrammarComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Grammar: Simple Future Tense</h2>
    <div v-html="grammarContent"></div>
  </div>
</template>

<script>
import grammarContent from '@/content/level1/lesson5/grammar.md';

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
