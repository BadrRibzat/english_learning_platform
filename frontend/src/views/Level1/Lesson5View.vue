<!--frontend/src/views/Level1/Lesson5View.vue-->
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
import VocabularyComponent from '@/components/Level1/Lesson5/VocabularyComponent.vue';
import GrammarComponent from '@/components/Level1/Lesson5/GrammarComponent.vue';
import ReadingComponent from '@/components/Level1/Lesson5/ReadingComponent.vue';
import SpeakingComponent from '@/components/Level1/Lesson5/SpeakingComponent.vue';
import WritingComponent from '@/components/Level1/Lesson5/WritingComponent.vue';
import QuizComponent from '@/components/Level1/Lesson5/QuizComponent.vue';

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
