<!-- components/level5/AdvancedModals.vue -->
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

const title = "Advanced Modal Verbs";
const content = `
  <p>Modal verbs have various advanced uses to express complex ideas about possibility, probability, obligation, and more.</p>

  <h3>Advanced Uses of Modal Verbs:</h3>
  <ol>
    <li>Deduction and Speculation:
      <ul>
        <li>must: He <strong>must be</strong> exhausted after that long flight.</li>
        <li>can't/couldn't: She <strong>can't be</strong> older than 25.</li>
        <li>may/might/could: They <strong>might have missed</strong> the train.</li>
      </ul>
    </li>
    <li>Criticizing Past Actions:
      <ul>
        <li>should have: You <strong>should have told</strong> me earlier.</li>
        <li>ought to have: We <strong>ought to have considered</strong> all options.</li>
      </ul>
    </li>
    <li>Expressing Regret:
      <ul>
        <li>could have: I <strong>could have studied</strong> harder.</li>
      </ul>
    </li>
    <li>Obligation and Necessity:
      <ul>
        <li>need not have: You <strong>need not have bought</strong> so much food.</li>
        <li>didn't need to: I <strong>didn't need to</strong> wake up early yesterday.</li>
      </ul>
    </li>
    <li>Habits and Typical Behavior:
      <ul>
        <li>will: He <strong>will always complain</strong> about something.</li>
        <li>would: When I was a child, we <strong>would often go</strong> to the beach.</li>
      </ul>
    </li>
  </ol>

  <h3>Modal Perfects:</h3>
  <p>Modal verbs combined with 'have + past participle' to talk about the past:</p>
  <ul>
    <li>must have: She <strong>must have left</strong> already.</li>
    <li>may/might/could have: I <strong>might have made</strong> a mistake.</li>
    <li>should/ought to have: You <strong>should have seen</strong> his face!</li>
    <li>would have: If I had known, I <strong>would have helped</strong>.</li>
  </ul>

  <h3>Examples:</h3>
  <ul>
    <li>You <strong>must be joking</strong>! That can't be true.</li>
    <li>By now, they <strong>should have arrived</strong> at the airport.</li>
    <li>I <strong>would rather have stayed</strong> at home.</li>
    <li>He <strong>can't have forgotten</strong> our anniversary.</li>
  </ul>
`;

const flashcards = [
  { front: "He must be exhausted", back: "Deduction with 'must'" },
  { front: "You should have told me", back: "Criticizing past action" },
  { front: "I could have studied harder", back: "Expressing regret" },
  { front: "You need not have bought so much", back: "Unnecessary past action" },
  { front: "He will always complain", back: "Typical behavior with 'will'" },
  { front: "She must have left already", back: "Modal perfect for past deduction" },
];

const exercises = [
  { question: "Express deduction: 'I'm sure he's lying.'", correctAnswer: "He must be lying" },
  { question: "Criticize: 'You didn't call me.' (use should)", correctAnswer: "You should have called me" },
  { question: "Express regret: 'I didn't apply for the job.'", correctAnswer: "I could have applied for the job" },
  { question: "Unnecessary action: 'I worked late, but it wasn't necessary.'", correctAnswer: "I need not have worked late" },
  { question: "Past habit: 'As a child, I often went swimming.'", correctAnswer: "As a child, I would often go swimming" },
  { question: "Past deduction: 'I'm sure she missed the bus.'", correctAnswer: "She must have missed the bus" },
];
</script>
