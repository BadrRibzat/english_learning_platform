<!-- components/lessons/level4/Gerunds.vue -->
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

const title = "Gerunds";
const content = `
  <p>A gerund is a verb form that ends in -ing and functions as a noun in a sentence.</p>

  <h3>Uses of Gerunds:</h3>
  <ol>
    <li>As the subject of a sentence:
      <ul>
        <li><strong>Swimming</strong> is good exercise.</li>
      </ul>
    </li>
    <li>As the object of a verb:
      <ul>
        <li>I enjoy <strong>reading</strong> books.</li>
      </ul>
    </li>
    <li>After prepositions:
      <ul>
        <li>She's interested in <strong>learning</strong> Spanish.</li>
      </ul>
    </li>
    <li>As a complement:
      <ul>
        <li>Her favorite hobby is <strong>painting</strong>.</li>
      </ul>
    </li>
  </ol>

  <h3>Gerunds vs. Infinitives:</h3>
  <p>Some verbs are followed by gerunds, some by infinitives, and some can take either:</p>
  <ul>
    <li>Verbs followed by gerunds: enjoy, finish, practice, suggest</li>
    <li>Verbs followed by infinitives: want, hope, plan, decide</li>
    <li>Verbs that can take both: like, love, hate, prefer</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>I stopped <strong>smoking</strong> last year. (gerund)</li>
    <li>I stopped <strong>to smoke</strong> a cigarette. (infinitive, different meaning)</li>
    <li>She suggested <strong>going</strong> to the beach.</li>
    <li>After <strong>finishing</strong> work, I went home.</li>
  </ul>

  <h3>Possessive Adjectives with Gerunds:</h3>
  <p>When we want to emphasize who is doing the action, we can use a possessive adjective before the gerund:</p>
  <ul>
    <li>I appreciate <strong>your helping</strong> me with this project.</li>
    <li>The teacher insisted on <strong>our doing</strong> the homework.</li>
  </ul>
`;

const flashcards = [
  { front: "Verb form ending in -ing functioning as a noun", back: "Gerund" },
  { front: "Swimming is good exercise", back: "Gerund as subject" },
  { front: "I enjoy reading", back: "Gerund as object of verb" },
  { front: "She's interested in learning Spanish", back: "Gerund after preposition" },
  { front: "enjoy, finish, practice, suggest", back: "Verbs followed by gerunds" },
  { front: "Your helping me", back: "Possessive adjective with gerund" },
];

const exercises = [
  { question: "Identify the gerund: 'Reading books is her favorite pastime.'", correctAnswer: "Reading" },
  { question: "Complete: 'He's good at ____ (play) chess.'", correctAnswer: "playing" },
  { question: "Correct: 'She suggested to go to the park.'", correctAnswer: "She suggested going to the park" },
  { question: "Use gerund or infinitive: 'I enjoy ____ (swim).'", correctAnswer: "swimming" },
  { question: "Complete: 'After ____ (finish) dinner, we watched a movie.'", correctAnswer: "finishing" },
  { question: "True or False: 'Gerunds can be used as the subject of a sentence.'", correctAnswer: "True" },
];
</script>
