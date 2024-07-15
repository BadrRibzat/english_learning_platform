<!-- components/level2/Prepositions.vue -->
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

const title = "Prepositions";
const content = `
  <p>Prepositions are words that show the relationship between a noun or pronoun and other words in a sentence. They often indicate location, direction, or time.</p>
  <p>Common prepositions:</p>
  <ul>
    <li>of location: in, on, at, under, over, between, among</li>
    <li>of direction: to, from, towards, into, out of</li>
    <li>of time: at, on, in, before, after, during</li>
  </ul>
  <p>Examples:</p>
  <ul>
    <li>The book is <strong>on</strong> the table.</li>
    <li>She's going <strong>to</strong> the store.</li>
    <li>We'll meet <strong>at</strong> 3 o'clock.</li>
    <li>The cat is sleeping <strong>under</strong> the chair.</li>
    <li>They arrived <strong>before</strong> noon.</li>
  </ul>
`;

const flashcards = [
  { front: "in, on, at, under", back: "Prepositions of location" },
  { front: "to, from, towards", back: "Prepositions of direction" },
  { front: "at, on, in, before, after", back: "Prepositions of time" },
  { front: "The book is ___ the table", back: "on" },
  { front: "We'll meet ___ 3 o'clock", back: "at" },
  { front: "She's going ___ the store", back: "to" },
];

const exercises = [
  { question: "Complete: 'The cat is sleeping ____ the chair.'", correctAnswer: "under" },
  { question: "Which preposition: 'We're going ____ the cinema.'", correctAnswer: "to" },
  { question: "Time preposition: 'I'll see you ____ Monday.'", correctAnswer: "on" },
  { question: "Fill in: 'The keys are ____ the drawer.'", correctAnswer: "in" },
  { question: "Choose: 'The plane flies ____ the clouds.' (over/under)", correctAnswer: "over" },
  { question: "Complete: 'They arrived ____ noon.'", correctAnswer: "before" },
];
</script>
