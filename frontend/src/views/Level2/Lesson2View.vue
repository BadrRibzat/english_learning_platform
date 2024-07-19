<!--frontend/src/views/Level2/Lesson2View.vue-->
<template>
  <div>
    <VocabularyComponent />
    <GrammarComponent />
    <ReadingComponent />
    <SpeakingComponent />
    <WritingComponent />
    <QuizComponent />
  </div>
</template>

<script>
import VocabularyComponent from '@/components/Level2/Lesson2/VocabularyComponent.vue';
import GrammarComponent from '@/components/Level2/Lesson2/GrammarComponent.vue';
import ReadingComponent from '@/components/Level2/Lesson2/ReadingComponent.vue';
import SpeakingComponent from '@/components/Level2/Lesson2/SpeakingComponent.vue';
import WritingComponent from '@/components/Level2/Lesson2/WritingComponent.vue';
import QuizComponent from '@/components/Level2/Lesson2/QuizComponent.vue';

export default {
  components: {
    VocabularyComponent,
    GrammarComponent,
    ReadingComponent,
    SpeakingComponent,
    WritingComponent,
    QuizComponent
  }
};
</script>

<style scoped>
</style>
