<!-- components/level1/LetterSounds.vue -->
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

const title = "Letter Sounds";
const content = `
  <p>Each letter in the English alphabet has its own sound. Let's learn some common sounds:</p>
  <ul>
    <li>A - /æ/ as in "cat" or /eɪ/ as in "cake"</li>
    <li>B - /b/ as in "ball"</li>
    <li>C - /k/ as in "cat" or /s/ as in "city"</li>
    <li>D - /d/ as in "dog"</li>
    <li>E - /ɛ/ as in "bed" or /i/ as in "bee"</li>
    <li>F - /f/ as in "fish"</li>
    <li>G - /ɡ/ as in "go" or /dʒ/ as in "gentle"</li>
    <li>H - /h/ as in "house"</li>
    <li>I - /ɪ/ as in "sit" or /aɪ/ as in "like"</li>
    <li>J - /dʒ/ as in "jump"</li>
    <li>K - /k/ as in "kite"</li>
    <li>L - /l/ as in "lamp"</li>
    <li>M - /m/ as in "moon"</li>
    <li>N - /n/ as in "nose"</li>
    <li>O - /ɒ/ as in "hot" or /oʊ/ as in "go"</li>
    <li>P - /p/ as in "pen"</li>
    <li>Q - /kw/ as in "queen"</li>
    <li>R - /r/ as in "red"</li>
    <li>S - /s/ as in "sun" or /z/ as in "has"</li>
    <li>T - /t/ as in "top"</li>
    <li>U - /ʌ/ as in "cup" or /ju/ as in "cute"</li>
    <li>V - /v/ as in "van"</li>
    <li>W - /w/ as in "water"</li>
    <li>X - /ks/ as in "box"</li>
    <li>Y - /j/ as in "yes" or /aɪ/ as in "fly"</li>
    <li>Z - /z/ as in "zebra"</li>
  </ul>
`;

const flashcards = [
  { front: "A", back: "/æ/ as in cat, /eɪ/ as in cake" },
  { front: "E", back: "/ɛ/ as in bed, /i/ as in bee" },
  { front: "I", back: "/ɪ/ as in sit, /aɪ/ as in like" },
  { front: "O", back: "/ɒ/ as in hot, /oʊ/ as in go" },
  { front: "U", back: "/ʌ/ as in cup, /ju/ as in cute" },
  { front: "C", back: "/k/ as in cat, /s/ as in city" },
  { front: "G", back: "/ɡ/ as in go, /dʒ/ as in gentle" },
  { front: "S", back: "/s/ as in sun, /z/ as in has" },
];

const exercises = [
  { question: "What sound does 'ph' usually make? (as in 'phone')", correctAnswer: "f" },
  { question: "What's the first sound in 'chair'?", correctAnswer: "ch" },
  { question: "What sound does 'th' make in 'this'?", correctAnswer: "th" },
  { question: "What's the vowel sound in 'book'?", correctAnswer: "u" },
  { question: "What's the consonant sound at the end of 'bag'?", correctAnswer: "g" },
  { question: "What's the first sound in 'shoe'?", correctAnswer: "sh" },
];
</script>
