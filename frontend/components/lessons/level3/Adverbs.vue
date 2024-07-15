<!-- components/level3/Adverbs.vue -->
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

const title = "Adverbs";
const content = `
  <p>Adverbs are words that modify verbs, adjectives, or other adverbs. They often end in -ly, but not always.</p>

  <h3>Types of Adverbs:</h3>
  <ul>
    <li>Manner: quickly, carefully, well</li>
    <li>Time: now, yesterday, soon</li>
    <li>Place: here, there, everywhere</li>
    <li>Frequency: always, often, never</li>
    <li>Degree: very, extremely, quite</li>
  </ul>

  <h3>Formation:</h3>
  <p>Many adverbs are formed by adding -ly to an adjective:</p>
  <ul>
    <li>quick → quickly</li>
    <li>careful → carefully</li>
  </ul>

  <h3>Irregular Adverbs:</h3>
  <ul>
    <li>good → well</li>
    <li>fast → fast</li>
    <li>hard → hard</li>
  </ul>

  <h3>Usage:</h3>
  <ul>
    <li>She sings <strong>beautifully</strong>. (modifies verb)</li>
    <li>The test was <strong>extremely</strong> difficult. (modifies adjective)</li>
    <li>He ran <strong>very</strong> quickly. (modifies another adverb)</li>
  </ul>
`;

const flashcards = [
  { front: "quickly, carefully", back: "Adverbs of manner" },
  { front: "now, yesterday", back: "Adverbs of time" },
  { front: "here, there", back: "Adverbs of place" },
  { front: "always, often", back: "Adverbs of frequency" },
  { front: "very, extremely", back: "Adverbs of degree" },
  { front: "Adverb form of 'good'", back: "well" },
];

const exercises = [
  { question: "Form adverb: 'quick'", correctAnswer: "quickly" },
  { question: "Adverb in 'He speaks English ____.'", correctAnswer: "well" },
  { question: "Type of adverb: 'very'", correctAnswer: "degree" },
  { question: "Complete: 'She ____ (careful) crossed the street.'", correctAnswer: "carefully" },
  { question: "True or False: All adverbs end in -ly.", correctAnswer: "False" },
  { question: "Adverb form of 'easy'", correctAnswer: "easily" },
];
</script>
