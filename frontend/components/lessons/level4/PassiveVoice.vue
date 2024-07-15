<!-- components/level4/PassiveVoice.vue -->
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

const title = "Passive Voice";
const content = `
  <p>The Passive Voice is used when the focus is on the action rather than the subject performing the action.</p>

  <h3>Formation:</h3>
  <p>Be + Past Participle</p>

  <h3>Tenses in Passive Voice:</h3>
  <ul>
    <li>Present Simple: is/are + past participle</li>
    <li>Past Simple: was/were + past participle</li>
    <li>Present Perfect: has/have been + past participle</li>
    <li>Past Perfect: had been + past participle</li>
    <li>Future: will be + past participle</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>Active: They build houses. → Passive: Houses <strong>are built</strong> (by them).</li>
    <li>Active: She wrote a letter. → Passive: A letter <strong>was written</strong> (by her).</li>
    <li>Active: They have sold the car. → Passive: The car <strong>has been sold</strong>.</li>
  </ul>

  <h3>When to use Passive Voice:</h3>
  <ul>
    <li>When the doer of the action is unknown or unimportant</li>
    <li>To emphasize the action rather than the doer</li>
    <li>In formal or scientific writing</li>
  </ul>
`;

const flashcards = [
  { front: "Basic structure of Passive Voice", back: "Be + Past Participle" },
  { front: "Present Simple Passive", back: "is/are + past participle" },
  { front: "Past Simple Passive", back: "was/were + past participle" },
  { front: "Present Perfect Passive", back: "has/have been + past participle" },
  { front: "When doer is unknown or unimportant", back: "Use Passive Voice" },
  { front: "Houses are built", back: "Passive Voice example" },
];

const exercises = [
  { question: "Change to Passive: 'They grow coffee in Brazil.'", correctAnswer: "Coffee is grown in Brazil" },
  { question: "Passive of 'She has written a book.'", correctAnswer: "A book has been written (by her)" },
  { question: "Complete: 'The letter ____ (send) yesterday.' (Passive)", correctAnswer: "was sent" },
  { question: "Active or Passive: 'The window was broken.'", correctAnswer: "Passive" },
  { question: "Change to Passive: 'They will announce the results tomorrow.'", correctAnswer: "The results will be announced tomorrow" },
  { question: "Complete: 'English ____ (speak) in many countries.' (Present Simple Passive)", correctAnswer: "is spoken" },
];
</script>
