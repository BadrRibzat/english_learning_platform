<!--frontend/src/components/Level2/Lesson4/SpeakingComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Speaking Practice</h2>
    <ul class="list-disc pl-5">
      <li v-for="(sentence, index) in sentences" :key="index">
        {{ sentence }}
      </li>
    </ul>
  </div>
</template>

<script>
import speakingData from '@/content/level2/lesson4/speaking.json';

export default {
  data() {
    return {
      sentences: speakingData.sentences
    };
  }
};
</script>

<style scoped>
</style>
