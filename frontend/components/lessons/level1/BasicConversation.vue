<!-- components/level1/BasicConversation.vue -->
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

const title = "Basic Conversation";
const content = `
  <p>Let's learn some basic conversation phrases:</p>
  <ul>
    <li>Hello / Hi - Used to greet someone</li>
    <li>Goodbye / Bye - Used when leaving</li>
    <li>How are you? - Asking about someone's well-being</li>
    <li>I'm fine, thank you. - Responding to "How are you?"</li>
    <li>What's your name? - Asking for someone's name</li>
    <li>My name is... - Telling your name</li>
    <li>Nice to meet you. - Polite phrase when meeting someone new</li>
    <li>Please - Used when asking for something politely</li>
    <li>Thank you / Thanks - Expressing gratitude</li>
    <li>You're welcome - Responding to "Thank you"</li>
  </ul>
  
  <p>Here's a sample conversation:</p>
  <p>
    A: Hello!<br>
    B: Hi!<br>
    A: How are you?<br>
    B: I'm fine, thank you. How are you?<br>
    A: I'm good, thanks. What's your name?<br>
    B: My name is John. Nice to meet you.<br>
    A: Nice to meet you too, John. I'm Sarah.<br>
    B: It was nice talking to you, Sarah. I have to go now.<br>
    A: Okay, goodbye John!<br>
    B: Bye, Sarah!
  </p>
`;

const flashcards = [
  { front: "Hello", back: "Used to greet someone" },
  { front: "Goodbye", back: "Used when leaving" },
  { front: "How are you?", back: "Asking about someone's well-being" },
  { front: "What's your name?", back: "Asking for someone's name" },
  { front: "Please", back: "Used when asking for something politely" },
  { front: "Thank you", back: "Expressing gratitude" },
];

const exercises = [
  { question: "What do you say when you meet someone for the first time?", correctAnswer: "Hello" },
  { question: "How do you ask someone's name?", correctAnswer: "What's your name?" },
  { question: "What's a polite response to 'Thank you'?", correctAnswer: "You're welcome" },
  { question: "How do you ask about someone's well-being?", correctAnswer: "How are you?" },
  { question: "What do you say when leaving?", correctAnswer: "Goodbye" },
  { question: "What's a polite word to use when asking for something?", correctAnswer: "Please" },
];
</script>
