<!--frontend/src/components/Level2/Lesson2/ReadingComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Reading Passage</h2>
    <p>{{ readingText }}</p>
  </div>
</template>

<script>
import readingText from '@/content/level2/lesson2/reading.md';

export default {
  data() {
    return {
      readingText
    };
  }
};
</script>

<style scoped>
</style>
