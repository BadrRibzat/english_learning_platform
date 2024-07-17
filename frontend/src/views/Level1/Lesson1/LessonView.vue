<template>
  <div>
    <h1>Complete Lesson 1 of Level 1</h1>
    <GrammarView />
    <VocabularyView />
    <ListeningView />
    <QuizView />
    <ReadingView />
    <ReviewView />
    <SpeakingView />
    <TestView />
    <WritingView />
  </div>
</template>

<script>
import GrammarView from "./GrammarView.vue";
import VocabularyView from "./VocabularyView.vue";
import ListeningView from "./ListeningView.vue";
import QuizView from "./QuizView.vue";
import ReadingView from "./ReadingView.vue";
import ReviewView from "./ReviewView.vue";
import SpeakingView from "./SpeakingView.vue";
import TestView from "./TestView.vue";
import WritingView from "./WritingView.vue";

export default {
  components: {
    GrammarView,
    VocabularyView,
    ListeningView,
    QuizView,
    ReadingView,
    ReviewView,
    SpeakingView,
    TestView,
    WritingView,
  },
};
</script>

<style scoped>
/* Specific styles for LessonView of Level 1, Lesson 1 */
</style>
