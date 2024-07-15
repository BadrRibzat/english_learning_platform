<!-- components/level1/SimpleWords.vue -->
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

const title = "Simple Words";
const content = `
  <p>Let's learn some simple, commonly used English words:</p>
  <ul>
    <li>Cat - a small furry animal</li>
    <li>Dog - a common pet animal</li>
    <li>House - a place where people live</li>
    <li>Tree - a tall plant with a trunk and branches</li>
    <li>Car - a vehicle with four wheels</li>
    <li>Book - pages with information or stories</li>
    <li>Sun - the bright star in our sky</li>
    <li>Moon - the natural satellite of Earth</li>
    <li>Water - a clear liquid we drink</li>
    <li>Food - things we eat</li>
    <li>Boy - a male child</li>
    <li>Girl - a female child</li>
    <li>Man - an adult male</li>
    <li>Woman - an adult female</li>
    <li>Bird - an animal with wings and feathers</li>
  </ul>
`;

const flashcards = [
  { front: "Cat", back: "A small furry animal" },
  { front: "Dog", back: "A common pet animal" },
  { front: "House", back: "A place where people live" },
  { front: "Tree", back: "A tall plant with a trunk and branches" },
  { front: "Car", back: "A vehicle with four wheels" },
  { front: "Book", back: "Pages with information or stories" },
  { front: "Sun", back: "The bright star in our sky" },
  { front: "Moon", back: "The natural satellite of Earth" },
  { front: "Water", back: "A clear liquid we drink" },
  { front: "Food", back: "Things we eat" },
  { front: "Boy", back: "A male child" },
  { front: "Girl", back: "A female child" },
  { front: "Man", back: "An adult male" },
  { front: "Woman", back: "An adult female" },
  { front: "Bird", back: "An animal with wings and feathers" },
];

const exercises = [
  { question: "What do we call a place where people live?", correctAnswer: "House" },
  { question: "What's a common pet animal?", correctAnswer: "Dog" },
  { question: "What do we call the bright star in our sky?", correctAnswer: "Sun" },
  { question: "What's a vehicle with four wheels?", correctAnswer: "Car" },
  { question: "What do we call pages with information or stories?", correctAnswer: "Book" },
  { question: "What's a clear liquid we drink?", correctAnswer: "Water" },
];
</script>
