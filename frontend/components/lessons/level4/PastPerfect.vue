<!-- components/level4/PastPerfect.vue -->
<template>
  <LessonComponent
    :title="title"
    :content="content"
    :flashcards="flashcards"
    :exercises="exercises"
  />
</template>

<script setup lang="ts">
import LessonComponent from '../shared/LessonComponent.vue';

const title = "Past Perfect Tense";
const content = `
  <p>The Past Perfect tense is used to talk about an action that was completed before another action in the past.</p>

  <h3>Formation:</h3>
  <p>Subject + had + past participle</p>

  <h3>Uses:</h3>
  <ul>
    <li>To describe an action that happened before another action in the past</li>
    <li>To express regrets about the past</li>
    <li>In reported speech</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>By the time I arrived, the movie <strong>had already started</strong>.</li>
    <li>She <strong>had studied</strong> English before she moved to London.</li>
    <li>I wished I <strong>had worked</strong> harder in school.</li>
  </ul>

  <h3>Negative Form:</h3>
  <p>Subject + had not (hadn't) + past participle</p>
  <ul>
    <li>They <strong>hadn't finished</strong> their homework when their parents came home.</li>
  </ul>

  <h3>Question Form:</h3>
  <p>Had + subject + past participle</p>
  <ul>
    <li><strong>Had</strong> you ever visited Paris before that trip?</li>
  </ul>
`;

const flashcards = [
  { front: "Formation of Past Perfect", back: "had + past participle" },
  { front: "Use: Action before another in the past", back: "Past Perfect" },
  { front: "By the time I arrived, the movie had already started", back: "Past Perfect example" },
  { front: "Negative form", back: "had not (hadn't) + past participle" },
  { front: "Question form", back: "Had + subject + past participle" },
  { front: "Use for regrets", back: "I wish I had studied harder" },
];

const exercises = [
  { question: "Form Past Perfect: 'eat'", correctAnswer: "had eaten" },
  { question: "Complete: 'She ____ (finish) her work before she left.'", correctAnswer: "had finished" },
  { question: "Make negative: 'They had seen the movie.'", correctAnswer: "They hadn't seen the movie" },
  { question: "Form question: 'you / visit / Paris'", correctAnswer: "Had you visited Paris?" },
  { question: "True or False: Past Perfect is used for future actions.", correctAnswer: "False" },
  { question: "Complete: 'By the time we arrived, the train ____ (leave).'", correctAnswer: "had left" },
];
</script>
