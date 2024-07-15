<!--frontend/pages/lessons/level1/AlphabetBasics.vue-->
<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="content"></div>
    <FlashCard
      v-for="(card, index) in flashcards"
      :key="index"
      :front="card.front"
      :back="card.back"
    />
    <div v-for="(exercise, index) in exercises" :key="index">
      <p>{{ exercise.question }}</p>
      <input type="text" v-model="userAnswers[index]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FlashCard from '@/components/FlashCard.vue';

const title = ref('');
const content = ref('');
const flashcards = ref([
  { front: 'A', back: 'Apple' },
  { front: 'B', back: 'Ball' },
  { front: 'C', back: 'Cat' },
  { front: 'D', back: 'Dog' },
  { front: 'E', back: 'Elephant' },
  { front: 'F', back: 'Fish' },
  { front: 'G', back: 'Goat' },
  { front: 'H', back: 'House' },
  { front: 'I', back: 'Igloo' },
  { front: 'J', back: 'Jug' },
  { front: 'K', back: 'Kite' },
  { front: 'L', back: 'Lion' },
  { front: 'M', back: 'Moon' },
  { front: 'N', back: 'Nest' },
  { front: 'O', back: 'Orange' },
  { front: 'P', back: 'Pen' },
  { front: 'Q', back: 'Queen' },
  { front: 'R', back: 'Rabbit' },
  { front: 'S', back: 'Sun' },
  { front: 'T', back: 'Tree' },
  { front: 'U', back: 'Umbrella' },
  { front: 'V', back: 'Van' },
  { front: 'W', back: 'Water' },
  { front: 'X', back: 'Box' },
  { front: 'Y', back: 'Yellow' },
  { front: 'Z', back: 'Zebra' }
]);
const userAnswers = ref<string[]>(new Array(flashcards.value.length).fill(''));
const exercises = [
  { question: 'What is the first letter in the alphabet?', correctAnswer: 'A' },
  { question: 'What is the second letter in the alphabet?', correctAnswer: 'B' },
  { question: 'What is the third letter in the alphabet?', correctAnswer: 'C' },
  { question: 'What is the fourth letter in the alphabet?', correctAnswer: 'D' },
  { question: 'What is the fifth letter in the alphabet?', correctAnswer: 'E' },
  { question: 'What is the sixth letter in the alphabet?', correctAnswer: 'F' },
  { question: 'What is the seventh letter in the alphabet?', correctAnswer: 'G' },
  { question: 'What is the eighth letter in the alphabet?', correctAnswer: 'H' },
  { question: 'What is the ninth letter in the alphabet?', correctAnswer: 'I' },
  { question: 'What is the tenth letter in the alphabet?', correctAnswer: 'J' },
  { question: 'What is the eleventh letter in the alphabet?', correctAnswer: 'K' },
  { question: 'What is the twelfth letter in the alphabet?', correctAnswer: 'L' },
  { question: 'What is the thirteenth letter in the alphabet?', correctAnswer: 'M' },
  { question: 'What is the fourteenth letter in the alphabet?', correctAnswer: 'N' },
  { question: 'What is the fifteenth letter in the alphabet?', correctAnswer: 'O' },
  { question: 'What is the sixteenth letter in the alphabet?', correctAnswer: 'P' },
  { question: 'What is the seventeenth letter in the alphabet?', correctAnswer: 'Q' },
  { question: 'What is the eighteenth letter in the alphabet?', correctAnswer: 'R' },
  { question: 'What is the nineteenth letter in the alphabet?', correctAnswer: 'S' },
  { question: 'What is the twentieth letter in the alphabet?', correctAnswer: 'T' },
  { question: 'What is the twenty-first letter in the alphabet?', correctAnswer: 'U' },
  { question: 'What is the twenty-second letter in the alphabet?', correctAnswer: 'V' },
  { question: 'What is the twenty-third letter in the alphabet?', correctAnswer: 'W' },
  { question: 'What is the twenty-fourth letter in the alphabet?', correctAnswer: 'X' },
  { question: 'What is the twenty-fifth letter in the alphabet?', correctAnswer: 'Y' },
  { question: 'What is the twenty-sixth letter in the alphabet?', correctAnswer: 'Z' }
];
</script>
