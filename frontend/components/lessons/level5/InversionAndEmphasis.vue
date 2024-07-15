<!-- components/level5/InversionAndEmphasis.vue -->
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

const title = "Inversion and Emphasis";
const content = `
  <p>Inversion is a technique where we change the normal word order of a sentence for emphasis or in certain structures. Emphasis can also be achieved through other means.</p>

  <h3>Types of Inversion:</h3>
  <ol>
    <li>Negative Adverbials:
      <ul>
        <li>Normal: I have never seen such a beautiful sunset.</li>
        <li>Inverted: <strong>Never have I seen</strong> such a beautiful sunset.</li>
      </ul>
    </li>
    <li>After certain adverbs or adverbial phrases:
      <ul>
        <li>Normal: We understood the situation only then.</li>
        <li>Inverted: <strong>Only then did we understand</strong> the situation.</li>
      </ul>
    </li>
    <li>Conditional sentences without 'if':
      <ul>
        <li>Normal: If I had known, I would have told you.</li>
        <li>Inverted: <strong>Had I known</strong>, I would have told you.</li>
      </ul>
    </li>
  </ol>

  <h3>Other Emphasis Techniques:</h3>
  <ol>
    <li>Cleft Sentences:
      <ul>
        <li>Normal: John broke the window.</li>
        <li>Cleft: <strong>It was John who broke the window.</strong></li>
      </ul>
    </li>
    <li>Fronting:
      <ul>
        <li>Normal: I can't stand rudeness.</li>
        <li>Fronted: <strong>Rudeness, I can't stand.</strong></li>
      </ul>
    </li>
    <li>Use of 'do' for emphasis:
      <ul>
        <li>Normal: I like your new haircut.</li>
        <li>Emphatic: I <strong>do like</strong> your new haircut.</li>
      </ul>
    </li>
  </ol>

  <h3>Examples:</h3>
  <ul>
    <li>Rarely <strong>have I seen</strong> such dedication.</li>
    <li>Not only <strong>is she intelligent</strong>, but she's also kind.</li>
    <li><strong>Should you need</strong> any help, please let me know.</li>
    <li>What <strong>I don't understand is</strong> why he left so suddenly.</li>
  </ul>
`;

const flashcards = [
  { front: "Never have I seen", back: "Inversion with negative adverbial" },
  { front: "Had I known", back: "Inversion in conditional without 'if'" },
  { front: "It was John who", back: "Cleft sentence for emphasis" },
  { front: "Rudeness, I can't stand", back: "Fronting for emphasis" },
  { front: "I do like", back: "Use of 'do' for emphasis" },
  { front: "Only then did we understand", back: "Inversion after certain adverbs" },
];

const exercises = [
  { question: "Invert: 'I have rarely seen such beauty.'", correctAnswer: "Rarely have I seen such beauty" },
  { question: "Use inversion: 'If I had realized earlier...'", correctAnswer: "Had I realized earlier" },
  { question: "Emphasize using cleft: 'The dog ate my homework.'", correctAnswer: "It was the dog that ate my homework" },
  { question: "Use 'do' for emphasis: 'I agree with you.'", correctAnswer: "I do agree with you" },
  { question: "Invert: 'We realized the truth only later.'", correctAnswer: "Only later did we realize the truth" },
  { question: "Front the object: 'I can't tolerate dishonesty.'", correctAnswer: "Dishonesty, I can't tolerate" },
];
</script>
