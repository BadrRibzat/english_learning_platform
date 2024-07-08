<template>
  <div>
    <div v-html="sanitizeHTML(userContent)"></div>
    <div class="quiz">
      <h2>{{ quiz.title }}</h2>
      <div
        v-for="(question, index) in quiz.questions"
        :key="index"
        class="question"
      >
        <p>{{ question.text }}</p>
        <div v-for="choice in question.choices" :key="choice.id" class="choice">
          <input
            :id="choice.id"
            v-model="answers[index]"
            type="radio"
            :value="choice.id"
          />
          <label :for="choice.id">{{ choice.text }}</label>
        </div>
      </div>
      <button class="submit-btn" @click="submitQuiz">Submit Quiz</button>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    userContent: {
      type: String,
      default: '',
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
          score,
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
        const correctChoice = question.choices.find(
          (choice) => choice.is_correct
        )
        if (selectedChoiceId === correctChoice.id) {
          correctAnswers++
        }
      })
      return (correctAnswers / this.quiz.questions.length) * 100
    },
    sanitizeHTML(html) {
      return sanitizeHTML(html)
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
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
