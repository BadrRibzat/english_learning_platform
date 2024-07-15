<!-- components/level3/FutureSimple.vue -->
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

const title = "Future Simple Tense";
const content = `
  <p>The Future Simple tense is used to talk about actions that will happen in the future. It's formed using 'will' + the base form of the verb.</p>

  <h3>Uses:</h3>
  <ul>
    <li>Predictions about the future</li>
    <li>Decisions made at the moment of speaking</li>
    <li>Promises or offers</li>
  </ul>

  <h3>Formation:</h3>
  <p>Subject + will + base form of the verb</p>

  <h3>Examples:</h3>
  <ul>
    <li>I <strong>will call</strong> you tomorrow.</li>
    <li>It <strong>will rain</strong> later today.</li>
    <li>They <strong>will help</strong> us move next week.</li>
  </ul>

  <h3>Negative form:</h3>
  <p>Subject + will not (won't) + base form of the verb</p>
  <ul>
    <li>She <strong>won't come</strong> to the party.</li>
    <li>We <strong>will not be</strong> late.</li>
  </ul>

  <h3>Questions:</h3>
  <p>Will + subject + base form of the verb</p>
  <ul>
    <li><strong>Will</strong> you attend the meeting?</li>
    <li><strong>Will</strong> they finish the project on time?</li>
  </ul>
`;

const flashcards = [
  { front: "I will call you", back: "Future Simple - affirmative" },
  { front: "She won't come", back: "Future Simple - negative" },
  { front: "Will you attend?", back: "Future Simple - question" },
  { front: "They will help us", back: "Future Simple - promise" },
  { front: "It will rain", back: "Future Simple - prediction" },
  { front: "We will not be late", back: "Future Simple - negative (full form)" },
];

const exercises = [
  { question: "Future Simple of 'go'", correctAnswer: "will go" },
  { question: "Negative: 'They will come.'", correctAnswer: "They won't come" },
  { question: "Question: '_____ he help us tomorrow?'", correctAnswer: "Will" },
  { question: "Complete: 'I ____ (finish) this book next week.'", correctAnswer: "will finish" },
  { question: "True or False: We use 'will' for all persons in Future Simple.", correctAnswer: "True" },
  { question: "Make future: 'She studies hard.'", correctAnswer: "She will study hard" },
];
</script>
