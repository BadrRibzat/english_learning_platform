<!-- components/level3/PastSimple.vue -->
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

const title = "Past Simple Tense";
const content = `
  <p>The Past Simple tense is used for:</p>
  <ul>
    <li>Completed actions in the past</li>
    <li>Series of completed actions</li>
    <li>Duration in the past</li>
  </ul>
  
  <h3>Formation:</h3>
  <p>Regular verbs: add -ed to the base form</p>
  <ul>
    <li>play → played</li>
    <li>walk → walked</li>
  </ul>
  
  <p>Irregular verbs: the form changes (must be memorized)</p>
  <ul>
    <li>go → went</li>
    <li>eat → ate</li>
    <li>see → saw</li>
  </ul>
  
  <h3>Examples:</h3>
  <ul>
    <li>I <strong>visited</strong> my grandmother yesterday.</li>
    <li>She <strong>went</strong> to the store, <strong>bought</strong> some milk, and <strong>came</strong> home.</li>
    <li>They <strong>lived</strong> in New York for ten years.</li>
  </ul>
  
  <h3>Negative form:</h3>
  <p>Subject + did not (didn't) + base form of the verb</p>
  <ul>
    <li>I <strong>didn't go</strong> to the party.</li>
    <li>She <strong>didn't like</strong> the movie.</li>
  </ul>
`;

const flashcards = [
  { front: "Regular past tense formation", back: "add -ed to base form" },
  { front: "go → went", back: "Irregular past tense" },
  { front: "eat → ate", back: "Irregular past tense" },
  { front: "I didn't go", back: "Negative past simple" },
  { front: "She visited her grandmother", back: "Affirmative past simple" },
  { front: "They lived in New York for ten years", back: "Past simple for duration" },
];

const exercises = [
  { question: "Change to past: 'I play tennis.'", correctAnswer: "I played tennis" },
  { question: "Irregular past of 'go'", correctAnswer: "went" },
  { question: "Make negative: 'She liked the movie.'", correctAnswer: "She didn't like the movie" },
  { question: "Past tense: 'They (eat) dinner at 7.'", correctAnswer: "They ate dinner at 7" },
  { question: "True or False: All verbs add -ed in past tense.", correctAnswer: "False" },
  { question: "Complete: 'We ____ (visit) Paris last summer.'", correctAnswer: "visited" },
];
</script>
