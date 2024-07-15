<!-- components/level3/CountableUncountable.vue -->
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

const title = "Countable and Uncountable Nouns";
const content = `
  <h3>Countable Nouns:</h3>
  <p>Nouns that can be counted and have both singular and plural forms.</p>
  <ul>
    <li>Examples: book, car, apple, friend</li>
    <li>Can use 'a/an' in singular form</li>
    <li>Can use numbers</li>
  </ul>

  <h3>Uncountable Nouns:</h3>
  <p>Nouns that cannot be counted and only have a singular form.</p>
  <ul>
    <li>Examples: water, milk, rice, information</li>
    <li>Cannot use 'a/an'</li>
    <li>Cannot use numbers directly</li>
  </ul>

  <h3>Usage with Quantifiers:</h3>
  <p>Countable Nouns:</p>
  <ul>
    <li>many, few, a few, several</li>
    <li>Example: many books, few cars</li>
  </ul>
  <p>Uncountable Nouns:</p>
  <ul>
    <li>much, little, a little</li>
    <li>Example: much water, little information</li>
  </ul>
  <p>Both:</p>
  <ul>
    <li>some, any, no, all, enough</li>
    <li>Example: some books, some water</li>
  </ul>

  <h3>Special Cases:</h3>
  <p>Some nouns can be both countable and uncountable, with different meanings:</p>
  <ul>
    <li>glass (material) - uncountable</li>
    <li>a glass (drinking vessel) - countable</li>
  </ul>
`;

const flashcards = [
  { front: "book, car, apple", back: "Countable nouns" },
  { front: "water, milk, rice", back: "Uncountable nouns" },
  { front: "many, few, several", back: "Quantifiers for countable nouns" },
  { front: "much, little", back: "Quantifiers for uncountable nouns" },
  { front: "some, any, no", back: "Quantifiers for both countable and uncountable" },
  { front: "glass (material vs. drinking vessel)", back: "Can be both countable and uncountable" },
];

const exercises = [
  { question: "Is 'book' countable or uncountable?", correctAnswer: "countable" },
  { question: "Correct: 'much books' or 'many books'?", correctAnswer: "many books" },
  { question: "Can you say 'a water'?", correctAnswer: "No" },
  { question: "Complete: 'I need ____ information.' (some/many)", correctAnswer: "some" },
  { question: "True or False: All nouns are either countable or uncountable.", correctAnswer: "False" },
  { question: "Which is correct: 'little cars' or 'few cars'?", correctAnswer: "few cars" },
];
</script>
