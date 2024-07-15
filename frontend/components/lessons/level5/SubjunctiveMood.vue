<!-- components/lessons/level5/SubjunctiveMood.vue -->
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

const title = "Subjunctive Mood";
const content = `
  <p>The subjunctive mood is used to express hypothetical or non-factual situations, wishes, demands, or suggestions.</p>

  <h3>Uses of the Subjunctive:</h3>
  <ol>
    <li>Expressions of wish or desire:
      <ul>
        <li>I wish I <strong>were</strong> taller.</li>
        <li>If only he <strong>were</strong> here.</li>
      </ul>
    </li>
    <li>Demands, recommendations, or suggestions:
      <ul>
        <li>The doctor recommended that he <strong>take</strong> the medicine daily.</li>
        <li>It's essential that everyone <strong>be</strong> on time.</li>
      </ul>
    </li>
    <li>Hypothetical situations:
      <ul>
        <li>If I <strong>were</strong> you, I would accept the job offer.</li>
      </ul>
    </li>
    <li>After certain verbs and expressions:
      <ul>
        <li>suggest, demand, propose, insist, recommend</li>
        <li>It's important/necessary/vital that...</li>
      </ul>
    </li>
  </ol>

  <h3>Formation:</h3>
  <p>The subjunctive often uses the base form of the verb, regardless of the subject:</p>
  <ul>
    <li>I suggest that he <strong>study</strong> more. (Not 'studies')</li>
    <li>It's crucial that she <strong>be</strong> there. (Not 'is')</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>If I <strong>were</strong> rich, I would travel the world.</li>
    <li>The committee demands that he <strong>resign</strong> from his position.</li>
    <li>I wish it <strong>were</strong> summer already.</li>
  </ul>
`;

const flashcards = [
  { front: "Use for hypothetical situations", back: "Subjunctive mood" },
  { front: "I wish I were taller", back: "Subjunctive for wish" },
  { front: "It's essential that everyone be on time", back: "Subjunctive for demand/necessity" },
  { front: "If I were you", back: "Subjunctive in conditional" },
  { front: "suggest, demand, propose, insist", back: "Verbs often followed by subjunctive" },
  { front: "Use base form of verb regardless of subject", back: "Subjunctive formation" },
];

const exercises = [
  { question: "Complete: 'I wish I ____ (be) more confident.'", correctAnswer: "were" },
  { question: "Use subjunctive: 'The boss insisted that she ____ (finish) the report.'", correctAnswer: "finish" },
  { question: "Correct: 'If I was you, I would apologize.'", correctAnswer: "If I were you, I would apologize" },
  { question: "Complete: 'It's important that he ____ (attend) the meeting.'", correctAnswer: "attend" },
  { question: "Use subjunctive: 'I suggest that he ____ (try) again.'", correctAnswer: "try" },
  { question: "True or False: 'The subjunctive always uses past tense verbs.'", correctAnswer: "False" },
];
</script>
