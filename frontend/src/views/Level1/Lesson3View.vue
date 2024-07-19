<!--frontend/src/views/Level1/Lesson3View.vue-->
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
import VocabularyComponent from '@/components/Level1/Lesson3/VocabularyComponent.vue';
import GrammarComponent from '@/components/Level1/Lesson3/GrammarComponent.vue';
import ReadingComponent from '@/components/Level1/Lesson3/ReadingComponent.vue';
import SpeakingComponent from '@/components/Level1/Lesson3/SpeakingComponent.vue';
import WritingComponent from '@/components/Level1/Lesson3/WritingComponent.vue';
import QuizComponent from '@/components/Level1/Lesson3/QuizComponent.vue';

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
