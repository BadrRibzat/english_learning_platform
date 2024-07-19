<!--frontend/src/components/Level2/Lesson1/WritingComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Writing Prompt</h2>
    <p>{{ writingPrompt }}</p>
  </div>
</template>

<script>
import writingPrompt from '@/content/level2/lesson1/writing.md';

export default {
  data() {
    return {
      writingPrompt
    };
  }
};
</script>

<style scoped>
</style>
