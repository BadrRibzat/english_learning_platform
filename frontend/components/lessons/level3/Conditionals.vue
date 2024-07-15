<!-- components/level3/Conditionals.vue -->
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

const title = "Conditionals (First and Second)";
const content = `
  <p>Conditionals are sentences that express one thing depending on another. We'll focus on the First and Second Conditionals.</p>

  <h3>First Conditional:</h3>
  <p>Used for real and possible situations in the future.</p>
  <p>Structure: If + present simple, ... will + infinitive</p>
  <ul>
    <li>If it rains, I will stay at home.</li>
    <li>If you study hard, you will pass the exam.</li>
  </ul>

  <h3>Second Conditional:</h3>
  <p>Used for unreal or improbable situations in the present or future.</p>
  <p>Structure: If + past simple, ... would + infinitive</p>
  <ul>
    <li>If I won the lottery, I would travel the world.</li>
    <li>If she spoke English, she would get the job.</li>
  </ul>

  <h3>Note:</h3>
  <ul>
    <li>The if-clause can come before or after the main clause.</li>
    <li>When the if-clause comes first, use a comma before the main clause.</li>
  </ul>
`;

const flashcards = [
  { front: "If it rains, I will stay at home", back: "First Conditional" },
  { front: "If I won the lottery, I would travel", back: "Second Conditional" },
  { front: "First Conditional structure", back: "If + present simple, will + infinitive" },
  { front: "Second Conditional structure", back: "If + past simple, would + infinitive" },
  { front: "Real and possible situations", back: "First Conditional" },
  { front: "Unreal or improbable situations", back: "Second Conditional" },
];

const exercises = [
  { question: "Complete: 'If it ____ (rain), we'll cancel the picnic.'", correctAnswer: "rains" },
  { question: "Which conditional: 'If I were rich, I would buy a yacht.'", correctAnswer: "Second Conditional" },
  { question: "Correct the error: 'If I will win, I will call you.'", correctAnswer: "If I win, I will call you" },
  { question: "Complete: 'She would travel more if she ____ (have) more time.'", correctAnswer: "had" },
  { question: "First or Second: 'If I miss the bus, I'll take a taxi.'", correctAnswer: "First Conditional" },
  { question: "Rewrite: 'I don't have a car. I can't drive to work.' (Use Second Conditional)", correctAnswer: "If I had a car, I would drive to work" },
];
</script>
