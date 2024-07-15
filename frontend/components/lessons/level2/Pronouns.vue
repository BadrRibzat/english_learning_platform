<!-- components/level2/Pronouns.vue -->
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

const title = "Pronouns";
const content = `
  <p>Pronouns are words that replace nouns in a sentence. They help us avoid repetition. Here are the main types of pronouns:</p>

  <h3>1. Personal Pronouns</h3>
  <ul>
    <li>Subject pronouns: I, you, he, she, it, we, they</li>
    <li>Object pronouns: me, you, him, her, it, us, them</li>
  </ul>

  <h3>2. Possessive Pronouns</h3>
  <p>my, your, his, her, its, our, their</p>

  <h3>3. Reflexive Pronouns</h3>
  <p>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>

  <h3>4. Demonstrative Pronouns</h3>
  <p>this, that, these, those</p>

  <h3>Examples:</h3>
  <ul>
    <li>Sarah is my friend. <strong>She</strong> is kind. (personal pronoun)</li>
    <li>This book is <strong>mine</strong>. (possessive pronoun)</li>
    <li>He hurt <strong>himself</strong> while cooking. (reflexive pronoun)</li>
    <li><strong>That</strong> is my car. (demonstrative pronoun)</li>
  </ul>
`;

const flashcards = [
  { front: "I, you, he, she, it, we, they", back: "Subject pronouns" },
  { front: "me, you, him, her, it, us, them", back: "Object pronouns" },
  { front: "my, your, his, her, its, our, their", back: "Possessive pronouns" },
  { front: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves", back: "Reflexive pronouns" },
  { front: "this, that, these, those", back: "Demonstrative pronouns" },
];

const exercises = [
  { question: "In the sentence 'John gave the book to ___', which pronoun should be used?", correctAnswer: "him" },
  { question: "What type of pronoun is 'ourselves'?", correctAnswer: "Reflexive pronoun" },
  { question: "Complete the sentence: '_____ is my favorite color.' (pointing to a color)", correctAnswer: "This" },
  { question: "What's the possessive pronoun for 'they'?", correctAnswer: "their" },
  { question: "In 'The cat licked _____', which reflexive pronoun should be used?", correctAnswer: "itself" },
  { question: "What type of pronouns are 'I, you, he, she, it, we, they'?", correctAnswer: "Subject pronouns" },
];
</script>
