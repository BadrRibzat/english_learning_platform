<!-- components/level1/SentenceStructure.vue -->
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

const title = "Basic Sentence Structure";
const content = `
  <p>A basic English sentence usually follows this structure:</p>
  <p><strong>Subject + Verb + Object</strong></p>
  <p>For example:</p>
  <ul>
    <li>Tom (subject) eats (verb) an apple (object).</li>
    <li>She (subject) reads (verb) a book (object).</li>
    <li>They (subject) play (verb) football (object).</li>
  </ul>
  <p>Sometimes, we can add more information:</p>
  <ul>
    <li>Tom eats an apple <em>in the garden</em>.</li>
    <li>She reads a book <em>every night</em>.</li>
    <li>They play football <em>at the park</em>.</li>
  </ul>
`;

const flashcards = [
  { front: "Subject", back: "The person or thing doing the action" },
  { front: "Verb", back: "The action in the sentence" },
  { front: "Object", back: "The person or thing receiving the action" },
  { front: "Tom eats an apple", back: "Subject: Tom, Verb: eats, Object: an apple" },
  { front: "She reads a book", back: "Subject: She, Verb: reads, Object: a book" },
  { front: "They play football", back: "Subject: They, Verb: play, Object: football" },
];

const exercises = [
  { question: "In the sentence 'The cat drinks milk', what is the subject?", correctAnswer: "The cat" },
  { question: "In the sentence 'The cat drinks milk', what is the verb?", correctAnswer: "drinks" },
  { question: "In the sentence 'The cat drinks milk', what is the object?", correctAnswer: "milk" },
  { question: "What's the correct order for a basic English sentence?", correctAnswer: "Subject + Verb + Object" },
  { question: "In 'John writes a letter', what's the verb?", correctAnswer: "writes" },
  { question: "In 'Mary sings a song', what's the object?", correctAnswer: "a song" },
];
</script>
