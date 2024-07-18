<!-- content/Level1/Lesson10/test/final-test.vue -->

<template>
  <div>
    <h2>Final Test: Weather Conditions</h2>
    <p>Complete the final test to assess your understanding of Lesson 10.</p>
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
          question: "What instrument measures atmospheric pressure?",
          options: ["Barometer", "Thermometer", "Anemometer", "Rain gauge"],
          correctAnswer: "Barometer"
        },
        {
          question: "What weather condition is described as having bright sunlight?",
          options: ["Cloudy", "Sunny", "Rainy", "Stormy"],
          correctAnswer: "Sunny"
        },
        {
          question: "What weather phenomenon involves frozen rain pellets?",
          options: ["Hail", "Snowfall", "Fog", "Wind"],
          correctAnswer: "Hail"
        }
        // Add more questions based on lesson content
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

