<!--frontend/src/components/Level2/Lesson3/VocabularyComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Vocabulary</h2>
    <ul class="list-disc pl-5">
      <li v-for="word in vocabulary.words" :key="word.word">
        <strong>{{ word.word }}</strong>: {{ word.definition }}
      </li>
    </ul>
  </div>
</template>

<script>
import vocabulary from '@/content/level2/lesson3/vocabulary.json';

export default {
  data() {
    return {
      vocabulary
    };
  }
};
</script>

<style scoped>
</style>
