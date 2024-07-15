<!-- components/level3/Comparatives.vue -->
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

const title = "Comparatives";
const content = `
  <p>Comparatives are used to compare two things. The form depends on the length and ending of the adjective.</p>

  <h3>Short adjectives (1 syllable):</h3>
  <p>Add -er</p>
  <ul>
    <li>tall → taller</li>
    <li>small → smaller</li>
  </ul>

  <h3>Longer adjectives (2 or more syllables):</h3>
  <p>Use 'more' before the adjective</p>
  <ul>
    <li>beautiful → more beautiful</li>
    <li>interesting → more interesting</li>
  </ul>

  <h3>Irregular comparatives:</h3>
  <ul>
    <li>good → better</li>
    <li>bad → worse</li>
    <li>far → farther/further</li>
  </ul>

  <h3>Usage:</h3>
  <p>Subject + verb + comparative + 'than' + object</p>
  <ul>
    <li>She is <strong>taller than</strong> her brother.</li>
    <li>This book is <strong>more interesting than</strong> that one.</li>
    <li>He runs <strong>faster than</strong> me.</li>
  </ul>
`;

const flashcards = [
  { front: "Comparative of 'tall'", back: "taller" },
  { front: "Comparative of 'beautiful'", back: "more beautiful" },
  { front: "Comparative of 'good'", back: "better" },
  { front: "She is ____ than her brother", back: "taller" },
  { front: "This book is ____ than that one", back: "more interesting" },
  { front: "He runs ____ than me", back: "faster" },
];

const exercises = [
  { question: "Form comparative: 'big'", correctAnswer: "bigger" },
  { question: "Comparative of 'interesting'", correctAnswer: "more interesting" },
  { question: "Complete: 'The blue car is ____ (expensive) than the red one.'", correctAnswer: "more expensive" },
  { question: "Irregular comparative of 'bad'", correctAnswer: "worse" },
  { question: "True or False: We always add -er to form comparatives.", correctAnswer: "False" },
  { question: "Fill in: 'This restaurant is ____ (good) than the other one.'", correctAnswer: "better" },
];
</script>
