<!-- components/level2/BasicVerbs.vue -->
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

const title = "Basic Verbs";
const content = `
  <p>Verbs are action words that express what the subject of a sentence is doing. Here are some common basic verbs:</p>
  <ul>
    <li>be (am, is, are)</li>
    <li>have</li>
    <li>do</li>
    <li>go</li>
    <li>come</li>
    <li>eat</li>
    <li>drink</li>
    <li>sleep</li>
    <li>work</li>
    <li>play</li>
  </ul>
  <p>Examples:</p>
  <ul>
    <li>I <strong>am</strong> happy.</li>
    <li>She <strong>has</strong> a cat.</li>
    <li>They <strong>go</strong> to school.</li>
    <li>We <strong>eat</strong> dinner at 7 PM.</li>
  </ul>
`;

const flashcards = [
  { front: "be", back: "to exist or live" },
  { front: "have", back: "to possess or own" },
  { front: "do", back: "to perform an action" },
  { front: "go", back: "to move or travel" },
  { front: "come", back: "to move towards someone or something" },
  { front: "eat", back: "to consume food" },
];

const exercises = [
  { question: "Which verb means 'to consume food'?", correctAnswer: "eat" },
  { question: "Complete the sentence: 'I ____ a student.'", correctAnswer: "am" },
  { question: "What's the verb in 'They play football'?", correctAnswer: "play" },
  { question: "Which verb means 'to move or travel'?", correctAnswer: "go" },
  { question: "Complete: 'She ____ a new car.'", correctAnswer: "has" },
  { question: "What's the opposite of 'come'?", correctAnswer: "go" },
];
</script>
