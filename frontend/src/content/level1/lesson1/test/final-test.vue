<!--content/Level1/Lesson1/test/final-test.vue-->

<template>
  <div>
    <h2>Final Test: Greetings and Introductions</h2>
    <form @submit.prevent="submitTest">
      <h3>Instructions:</h3>
      <p>Answer the following questions to test your understanding of the lesson.</p>
      
      <!-- Question 1 -->
      <div class="question">
        <p>{{ questions[0].question }}</p>
        <ul>
          <li v-for="(option, index) in questions[0].options" :key="index">
            <label>
              <input type="radio" v-model="answers[0]" :value="option"> {{ option }}
            </label>
          </li>
        </ul>
      </div>

      <!-- Question 2 -->
      <div class="question">
        <p>{{ questions[1].question }}</p>
        <ul>
          <li v-for="(option, index) in questions[1].options" :key="index">
            <label>
              <input type="radio" v-model="answers[1]" :value="option"> {{ option }}
            </label>
          </li>
        </ul>
      </div>

      <!-- Submit Button -->
      <button type="submit">Submit Test</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FinalTestComponent',
  data() {
    return {
      questions: [
        {
          question: "What is a common greeting?",
          options: ["Hello", "Goodbye", "Thank you"],
          correctAnswer: "Hello"
        },
        {
          question: "How do you introduce yourself?",
          options: ["Say goodbye", "Say your name", "Ask a question"],
          correctAnswer: "Say your name"
        }
      ],
      answers: ['', ''] // Initialize empty answers array
    };
  },
  methods: {
    submitTest() {
      // Check answers and provide feedback or scoring logic
      console.log('Submitted answers:', this.answers);
      // Example: Calculate score and display results
      // Replace with your actual scoring and feedback logic
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

