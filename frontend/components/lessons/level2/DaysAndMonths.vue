<!-- components/level2/DaysAndMonths.vue -->
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

const title = "Days and Months";
const content = `
  <h3>Days of the Week</h3>
  <p>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</p>
  
  <h3>Months of the Year</h3>
  <p>January, February, March, April, May, June, July, August, September, October, November, December</p>
  
  <h3>Usage Notes:</h3>
  <ul>
    <li>Days and months always start with a capital letter in English.</li>
    <li>We use 'on' before days: "I'll see you <strong>on</strong> Monday."</li>
    <li>We use 'in' before months: "My birthday is <strong>in</strong> April."</li>
  </ul>
  
  <h3>Abbreviations:</h3>
  <p>Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
  <p>Months: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</p>
`;

const flashcards = [
  { front: "First day of the week", back: "Monday" },
  { front: "Weekend days", back: "Saturday and Sunday" },
  { front: "First month of the year", back: "January" },
  { front: "Last month of the year", back: "December" },
  { front: "Preposition used with days", back: "on" },
  { front: "Preposition used with months", back: "in" },
];

const exercises = [
  { question: "What day comes after Wednesday?", correctAnswer: "Thursday" },
  { question: "Which month comes before July?", correctAnswer: "June" },
  { question: "Complete: 'I have a meeting ____ Friday.'", correctAnswer: "on" },
  { question: "What's the correct spelling: 'wendsday' or 'wednesday'?", correctAnswer: "Wednesday" },
  { question: "Which is correct: 'in April' or 'on April'?", correctAnswer: "in April" },
  { question: "What's the abbreviation for September?", correctAnswer: "Sep" },
];
</script>
