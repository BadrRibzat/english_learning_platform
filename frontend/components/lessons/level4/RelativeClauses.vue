<!-- components/level4/RelativeClauses.vue -->
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

const title = "Relative Clauses";
const content = `
  <p>Relative clauses are used to give additional information about a noun. They are introduced by relative pronouns.</p>

  <h3>Relative Pronouns:</h3>
  <ul>
    <li>Who: for people</li>
    <li>Which: for things</li>
    <li>That: for people or things</li>
    <li>Whose: to show possession</li>
    <li>Where: for places</li>
    <li>When: for times</li>
  </ul>

  <h3>Types of Relative Clauses:</h3>
  <p>1. Defining (Restrictive) Relative Clauses:</p>
  <ul>
    <li>Provide essential information</li>
    <li>No commas</li>
    <li>Example: The woman <strong>who called yesterday</strong> is my aunt.</li>
  </ul>

  <p>2. Non-defining (Non-restrictive) Relative Clauses:</p>
  <ul>
    <li>Provide extra, non-essential information</li>
    <li>Use commas</li>
    <li>Example: My aunt, <strong>who called yesterday</strong>, is visiting next week.</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>The book <strong>that I'm reading</strong> is very interesting.</li>
    <li>The house <strong>where I grew up</strong> is now a museum.</li>
    <li>The man <strong>whose car was stolen</strong> called the police.</li>
  </ul>
`;

const flashcards = [
  { front: "Who, Which, That", back: "Common relative pronouns" },
  { front: "Whose", back: "Relative pronoun for possession" },
  { front: "Where, When", back: "Relative pronouns for place and time" },
  { front: "No commas, essential information", back: "Defining relative clause" },
  { front: "Uses commas, extra information", back: "Non-defining relative clause" },
  { front: "The book that I'm reading", back: "Example of defining relative clause" },
];

const exercises = [
  { question: "Complete: 'The woman ____ lives next door is a doctor.' (who/which)", correctAnswer: "who" },
  { question: "Identify: 'My car, which is very old, needs repairs.' (Defining/Non-defining)", correctAnswer: "Non-defining" },
  { question: "Correct: 'The city where I live in is beautiful.'", correctAnswer: "The city where I live is beautiful" },
  { question: "Complete: 'The man ____ phone rang is my boss.' (whose/who's)", correctAnswer: "whose" },
  { question: "Combine: 'I met a girl. She speaks five languages.' (Use a relative clause)", correctAnswer: "I met a girl who speaks five languages" },
  { question: "True or False: 'That' can be used for both people and things.", correctAnswer: "True" },
];
</script>
