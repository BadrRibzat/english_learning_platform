<template>
  <div>
    <h1>Lesson 1: Greetings and Introductions</h1>
    <VocabularyComponent />
    <GrammarComponent />
    <ReadingComponent />
    <SpeakingComponent />
    <WritingComponent />
    <QuizComponent />
    <TestComponent />
  </div>
</template>

<script>
import VocabularyComponent from "@/components/VocabularyComponent.vue";
import GrammarComponent from "@/components/GrammarComponent.vue";
import ReadingComponent from "@/components/ReadingComponent.vue";
import SpeakingComponent from "@/components/SpeakingComponent.vue";
import WritingComponent from "@/components/WritingComponent.vue";
import QuizComponent from "@/components/QuizComponent.vue";
import TestComponent from "@/components/TestComponent.vue";

export default {
  components: {
    VocabularyComponent,
    GrammarComponent,
    ReadingComponent,
    SpeakingComponent,
    WritingComponent,
    QuizComponent,
    TestComponent,
  },
};
</script>
