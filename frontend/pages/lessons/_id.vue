<!-- frontend/pages/lessons/_id.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ lesson.title }}</h1>
    <div class="bg-white shadow-lg rounded-lg p-6">
      <div v-html="lesson.content" class="prose max-w-none mb-8"></div>
      <div v-if="quiz" class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Quiz</h2>
        <form @submit.prevent="submitQuiz">
          <div v-for="(question, index) in quiz" :key="index" class="mb-6">
            <p class="font-semibold mb-2">{{ question.question }}</p>
            <div class="space-y-2">
              <label v-for="answer in shuffleAnswers(question)" :key="answer" class="flex items-center">
                <input type="radio" :name="`question-${index}`" :value="answer" v-model="userAnswers[index]" class="mr-2">
                {{ answer }}
              </label>
            </div>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lesson: {},
      quiz: [],
      userAnswers: []
    }
  },
  async fetch() {
    try {
      const lessonResponse = await this.$axios.get(`/lessons/${this.$route.params.id}/`)
      this.lesson = lessonResponse.data

      const quizResponse = await this.$axios.get(`/quizzes/?lesson=${this.$route.params.id}`)
      this.quiz = quizResponse.data
    } catch (error) {
      console.error('Error fetching lesson data:', error)
    }
  },
  methods: {
    shuffleAnswers(question) {
      const answers = [
        question.correct_answer,
        question.wrong_answer1,
        question.wrong_answer2,
        question.wrong_answer3
      ]
      return answers.sort(() => Math.random() - 0.5)
    },
    async submitQuiz() {
      try {
        const score = this.calculateScore()
        await this.$axios.post('/progress/update_progress/', {
          lesson_id: this.lesson.id,
          completed: true,
          score: score
        })
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Error submitting quiz:', error)
      }
    },
    calculateScore() {
      let score = 0
      this.quiz.forEach((question, index) => {
        if (this.userAnswers[index] === question.correct_answer) {
          score++
        }
      })
      return (score / this.quiz.length) * 100
    }
  }
}
</script>
