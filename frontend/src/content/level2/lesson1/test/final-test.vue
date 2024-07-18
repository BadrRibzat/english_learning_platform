<!-- content/Level2/Lesson1/test/final-test.vue -->

<template>
  <div>
    <h2>Final Test: Telling Time</h2>
    <p>Complete the final test to assess your understanding of Lesson 1.</p>
    <div class="test">
      <h3>Instructions:</h3>
      <ol>
        <li>Answer all the questions to the best of your ability.</li>
        <li>Review your answers before submitting.</li>
      </ol>
      <div v-for="(question, index) in questions" :key="index">
        <h4>{{ question.question }}</h4>
        <ul>
          <li v-for="(option, idx) in question.options" :key="idx">
            <label>
              <input type="radio" :name="'question-' + index" :value="option" v-model="answers[index]">
              {{ option }}
            </label>
          </li>
        </ul>
      </div>
      <button @click="submitTest">Submit Test</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      questions: [
        {
          question: "What time do you usually wake up?",
          options: ["6:00 AM", "7:30 AM", "8:00 AM"],
          correctAnswer: "7:30 AM"
        },
        {
          question: "When do you have lunch?",
          options: ["At 12 o'clock", "At 2 o'clock", "At 4 o'clock"],
          correctAnswer: "At 12 o'clock"
        },
        {
          question: "Which preposition is correct? I have an appointment ___ 2:30 PM.",
          options: ["at", "in", "on"],
          correctAnswer: "at"
        }
      ],
      answers: new Array(this.questions.length).fill(null)
    };
  },
  methods: {
    submitTest() {
      // Logic to handle test submission and scoring
      let score = 0;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.answers[i] === this.questions[i].correctAnswer) {
          score++;
        }
      }
      alert(`You scored ${score} out of ${this.questions.length}`);
    }
  }
}
</script>

<style scoped>
/* Your component styles here */
</style>

