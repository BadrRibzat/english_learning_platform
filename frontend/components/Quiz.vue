<!-- frontend/components/Quiz.vue -->

<template>
  <div class="quiz">
    <h2>{{ quiz.title }}</h2>
    <div v-for="(question, index) in quiz.questions" :key="index" class="question">
      <p>{{ question.text }}</p>
      <div v-for="choice in question.choices" :key="choice.id" class="choice">
        <input
          type="radio"
          :id="choice.id"
          :value="choice.id"
          v-model="answers[index]"
        />
        <label :for="choice.id">{{ choice.text }}</label>
      </div>
    </div>
    <button @click="submitQuiz" class="submit-btn">Submit Quiz</button>
  </div>
</template>

<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      answers: {},
    }
  },
  methods: {
    async submitQuiz() {
      const score = this.calculateScore()
      try {
        await this.$axios.post('/api/quiz-results/', {
          quiz: this.quiz.id,
          score: score,
        })
        this.$emit('quiz-completed', score)
      } catch (error) {
        console.error('Error submitting quiz:', error)
      }
    },
    calculateScore() {
      let correctAnswers = 0
      this.quiz.questions.forEach((question, index) => {
        const selectedChoiceId = this.answers[index]
        const correctChoice = question.choices.find(choice => choice.is_correct)
        if (selectedChoiceId === correctChoice.id) {
          correctAnswers++
        }
      })
      return (correctAnswers / this.quiz.questions.length) * 100
    },
  },
}
</script>

<style scoped>
.quiz {
  max-width: 600px;
  margin: 0 auto;
}
.question {
  margin-bottom: 20px;
}
.choice {
  margin-bottom: 10px;
}
.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
