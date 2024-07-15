<!-- components/lessons/level4/ReportedSpeech.vue -->
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

const title = "Reported Speech";
const content = `
  <p>Reported Speech (also known as Indirect Speech) is used to report what someone else said without quoting them directly.</p>

  <h3>Changes in Reported Speech:</h3>
  <ol>
    <li>Tense Changes:
      <ul>
        <li>Present Simple → Past Simple</li>
        <li>Present Continuous → Past Continuous</li>
        <li>Present Perfect → Past Perfect</li>
        <li>Past Simple → Past Perfect</li>
      </ul>
    </li>
    <li>Pronoun Changes:
      <ul>
        <li>I → he/she</li>
        <li>we → they</li>
        <li>you → I/he/she/they (depending on context)</li>
      </ul>
    </li>
    <li>Time Expression Changes:
      <ul>
        <li>now → then</li>
        <li>today → that day</li>
        <li>yesterday → the day before</li>
        <li>tomorrow → the next day</li>
      </ul>
    </li>
  </ol>

  <h3>Examples:</h3>
  <ul>
    <li>Direct: "I am happy," she said. → Reported: She said (that) she was happy.</li>
    <li>Direct: "I will call you," he promised. → Reported: He promised (that) he would call me.</li>
    <li>Direct: "We have finished the project," they announced. → Reported: They announced (that) they had finished the project.</li>
  </ul>

  <h3>Reporting Questions:</h3>
  <p>Use 'if' or 'whether' for yes/no questions, and keep the question word for other questions.</p>
  <ul>
    <li>Direct: "Do you like coffee?" → Reported: He asked if I liked coffee.</li>
    <li>Direct: "Where do you live?" → Reported: She asked where I lived.</li>
  </ul>
`;

const flashcards = [
  { front: "Present Simple → Past Simple", back: "Tense change in Reported Speech" },
  { front: "I → he/she", back: "Pronoun change in Reported Speech" },
  { front: "now → then", back: "Time expression change in Reported Speech" },
  { front: "Reporting yes/no questions", back: "Use 'if' or 'whether'" },
  { front: "'I am happy,' she said.", back: "She said (that) she was happy." },
  { front: "Direct: Do you like coffee?", back: "Reported: He asked if I liked coffee." },
];

const exercises = [
  { question: "Change to Reported Speech: 'I am studying,' he said.", correctAnswer: "He said (that) he was studying" },
  { question: "Report: 'We will visit Paris,' they said.", correctAnswer: "They said (that) they would visit Paris" },
  { question: "Change time expression: 'I'll see you tomorrow,' she said yesterday.", correctAnswer: "She said she would see me today" },
  { question: "Report the question: 'Where do you work?'", correctAnswer: "He/She asked where I worked" },
  { question: "Change to Reported Speech: 'I have never been to Japan,' Tom said.", correctAnswer: "Tom said (that) he had never been to Japan" },
  { question: "Report: 'Do you need any help?' she asked me.", correctAnswer: "She asked me if I needed any help" },
];
</script>
