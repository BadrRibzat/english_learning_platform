<!-- components/level1/ReadingComprehension.vue -->
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

const title = "Reading Comprehension";
const content = `
  <p>Let's practice reading comprehension with a simple story:</p>
  <div class="story">
    <h3>The Red Ball</h3>
    <p>Tom has a red ball. He likes to play with his ball in the park. One day, Tom throws the ball too high. The ball gets stuck in a tree. Tom is sad. His friend Sara sees Tom. She helps Tom get the ball from the tree. Tom is happy again. Tom and Sara play with the ball together.</p>
  </div>
`;

const flashcards = [
  { front: "What color is Tom's ball?", back: "Red" },
  { front: "Where does Tom like to play?", back: "In the park" },
  { front: "What happens to the ball?", back: "It gets stuck in a tree" },
  { front: "Who helps Tom?", back: "Sara" },
  { front: "How does Tom feel at the end?", back: "Happy" },
];

const exercises = [
  { question: "What color is Tom's ball?", correctAnswer: "Red" },
  { question: "Where does Tom like to play with his ball?", correctAnswer: "Park" },
  { question: "What happens when Tom throws the ball too high?", correctAnswer: "It gets stuck in a tree" },
  { question: "How does Tom feel when the ball is stuck?", correctAnswer: "Sad" },
  { question: "Who helps Tom get the ball?", correctAnswer: "Sara" },
  { question: "What do Tom and Sara do at the end?", correctAnswer: "Play with the ball together" },
];
</script>
