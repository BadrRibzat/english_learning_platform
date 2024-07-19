<!--frontend/src/views/Level1/Lesson4View.vue-->
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
import VocabularyComponent from '@/components/Level1/Lesson4/VocabularyComponent.vue';
import GrammarComponent from '@/components/Level1/Lesson4/GrammarComponent.vue';
import ReadingComponent from '@/components/Level1/Lesson4/ReadingComponent.vue';
import SpeakingComponent from '@/components/Level1/Lesson4/SpeakingComponent.vue';
import WritingComponent from '@/components/Level1/Lesson4/WritingComponent.vue';
import QuizComponent from '@/components/Level1/Lesson4/QuizComponent.vue';

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
