<!-- components/level2/PresentSimple.vue -->
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

const title = "Present Simple Tense";
const content = `
  <p>The Present Simple tense is used for:</p>
  <ul>
    <li>Habits or regular actions</li>
    <li>General truths</li>
    <li>Scheduled events</li>
  </ul>
  <p>Formation:</p>
  <ul>
    <li>I/You/We/They + verb</li>
    <li>He/She/It + verb + s</li>
  </ul>
  <p>Examples:</p>
  <ul>
    <li>I play tennis every weekend.</li>
    <li>She works in a bank.</li>
    <li>The sun rises in the east.</li>
    <li>The train leaves at 3 PM.</li>
  </ul>
  <p>For negative sentences, use 'do not' (don't) or 'does not' (doesn't):</p>
  <ul>
    <li>I don't like coffee.</li>
    <li>He doesn't speak French.</li>
  </ul>
`;

const flashcards = [
  { front: "I play tennis", back: "Present Simple - habit" },
  { front: "She works in a bank", back: "Present Simple - He/She/It + verb + s" },
  { front: "The sun rises in the east", back: "Present Simple - general truth" },
  { front: "I don't like coffee", back: "Present Simple - negative" },
  { front: "He doesn't speak French", back: "Present Simple - negative (He/She/It)" },
  { front: "The train leaves at 3 PM", back: "Present Simple - scheduled event" },
];

const exercises = [
  { question: "Complete: 'She ____ (study) every day.'", correctAnswer: "studies" },
  { question: "Is this correct: 'They goes to school.'?", correctAnswer: "No" },
  { question: "Make negative: 'I like spinach.'", correctAnswer: "I don't like spinach" },
  { question: "True or False: We use Present Simple for habits.", correctAnswer: "True" },
  { question: "Complete: 'He ____ (not/drink) coffee.'", correctAnswer: "doesn't drink" },
  { question: "Which is correct: 'The Earth rotate/rotates around the Sun'?", correctAnswer: "rotates" },
];
</script>
