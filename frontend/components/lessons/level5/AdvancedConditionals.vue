<!-- components/lessons/level5/AdvancedConditionals.vue -->
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

const title = "Advanced Conditionals";
const content = `
  <p>Advanced conditionals go beyond the basic zero, first, second, and third conditional structures to express more complex or nuanced ideas.</p>

  <h3>Mixed Conditionals:</h3>
  <p>These combine different types of conditionals to refer to different time frames in the same sentence.</p>
  <ul>
    <li>Past condition, present result: 
      <br><strong>If I had studied harder</strong> (past), <strong>I would have a better job now</strong> (present).</li>
    <li>Present condition, past result: 
      <br><strong>If I were rich</strong> (present unreal), <strong>I would have bought a house last year</strong> (past).</li>
  </ul>

  <h3>Inverted Conditionals:</h3>
  <p>These use inversion instead of 'if' to create a conditional sentence.</p>
  <ul>
    <li>Normal: If I had known earlier, I would have told you.</li>
    <li>Inverted: <strong>Had I known earlier</strong>, I would have told you.</li>
  </ul>

  <h3>Other Advanced Conditional Structures:</h3>
  <ol>
    <li>Using 'should':
      <br><strong>Should you need any assistance</strong>, please don't hesitate to ask.</li>
    <li>Using 'were to':
      <br><strong>If he were to apologize</strong>, I would forgive him.</li>
    <li>Using 'unless':
      <br><strong>Unless you study hard</strong>, you won't pass the exam.</li>
    <li>Double conditionals:
      <br><strong>If it had rained and if I had brought an umbrella</strong>, I wouldn't have gotten wet.</li>
  </ol>

  <h3>Implied Conditionals:</h3>
  <p>These are conditional sentences where the 'if' clause is implied rather than stated.</p>
  <ul>
    <li>Otherwise: I'm glad I brought an umbrella. <strong>Otherwise, I would have gotten wet</strong>.</li>
    <li>With 'but for': <strong>But for your help</strong>, I would have failed.</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>Were I to win the lottery, I'd buy a private island.</li>
    <li>If you should see her, tell her I said hello.</li>
    <li>Had it not been for your advice, I might have made a big mistake.</li>
    <li>If only I were taller, I could have become a basketball player.</li>
  </ul>
`;

const flashcards = [
  { front: "If I had studied harder, I would have a better job now", back: "Mixed conditional (past condition, present result)" },
  { front: "Had I known earlier", back: "Inverted conditional" },
  { front: "Should you need any assistance", back: "Conditional with 'should'" },
  { front: "Unless you study hard", back: "Conditional with 'unless'" },
  { front: "Otherwise, I would have gotten wet", back: "Implied conditional" },
  { front: "But for your help, I would have failed", back: "Implied conditional with 'but for'" },
];

const exercises = [
  { question: "Create a mixed conditional: past condition, present result (study, have better job)", correctAnswer: "If I had studied harder, I would have a better job now" },
  { question: "Invert: 'If I were you, I would accept the offer.'", correctAnswer: "Were I you, I would accept the offer" },
  { question: "Use 'should' in a conditional: 'If you need any help, call me.'", correctAnswer: "Should you need any help, call me" },
  { question: "Use 'were to' in a conditional: 'If it rains tomorrow, we'll cancel the picnic.'", correctAnswer: "If it were to rain tomorrow, we'd cancel the picnic" },
  { question: "Create an implied conditional with 'otherwise': 'I'm glad I studied. I passed the exam.'", correctAnswer: "I'm glad I studied. Otherwise, I wouldn't have passed the exam" },
  { question: "Use 'but for' in a conditional: 'Your support was crucial. Without it, I would have given up.'", correctAnswer: "But for your support, I would have given up" },
];
</script>
