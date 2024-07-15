<!-- components/level2/Adjectives.vue -->
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

const title = "Adjectives";
const content = `
  <p>Adjectives are words that describe or modify nouns. They provide more information about the characteristics of people, places, or things.</p>
  <p>Common types of adjectives:</p>
  <ul>
    <li>Descriptive: big, small, beautiful, ugly</li>
    <li>Color: red, blue, green, yellow</li>
    <li>Quantity: many, few, some, all</li>
    <li>Opinion: good, bad, interesting, boring</li>
  </ul>
  <p>In English, adjectives usually come before the noun they modify:</p>
  <ul>
    <li>A <strong>big</strong> house</li>
    <li>The <strong>blue</strong> sky</li>
    <li><strong>Interesting</strong> books</li>
  </ul>
  <p>When using multiple adjectives, the general order is:</p>
  <p>Opinion - Size - Age - Shape - Color - Origin - Material - Purpose</p>
  <p>Example: A <strong>nice big old rectangular brown French wooden dining</strong> table</p>
`;

const flashcards = [
  { front: "big, small, beautiful, ugly", back: "Descriptive adjectives" },
  { front: "red, blue, green, yellow", back: "Color adjectives" },
  { front: "many, few, some, all", back: "Quantity adjectives" },
  { front: "good, bad, interesting, boring", back: "Opinion adjectives" },
  { front: "A big house", back: "Adjective before noun" },
  { front: "Opinion - Size - Age - Shape - Color - Origin - Material - Purpose", back: "Adjective order" },
];

const exercises = [
  { question: "What type of adjective is 'beautiful'?", correctAnswer: "Descriptive" },
  { question: "Order: 'A (wooden / big / table)'", correctAnswer: "A big wooden table" },
  { question: "What's the adjective in 'The red car'?", correctAnswer: "red" },
  { question: "True or False: Adjectives usually come after nouns in English.", correctAnswer: "False" },
  { question: "Complete: 'She has an ____ smile.' (positive opinion)", correctAnswer: "beautiful" },
  { question: "What type of adjective is 'many'?", correctAnswer: "Quantity" },
];
</script>
