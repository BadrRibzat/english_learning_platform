<template>
  <div>
    <div
      v-for="(question, index) in sanitizedContent.questions"
      :key="index"
      class="mb-6"
    >
      <h3 class="text-lg font-semibold mb-2">{{ question.text }}</h3>
      <div
        v-for="(option, optionIndex) in question.options"
        :key="optionIndex"
        class="mb-2"
      >
        <label class="flex items-center">
          <input
            v-model="answers[index]"
            type="radio"
            :name="`question-${index}`"
            :value="optionIndex"
            class="mr-2"
          />
          {{ option }}
        </label>
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      @click="submitQuiz"
    >
      Submit Quiz
    </button>
    <div v-if="score !== null" class="mt-4">
      <p class="text-lg font-semibold">
        Your score: {{ score }} / {{ sanitizedContent.questions.length }}
      </p>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      answers: {},
      score: null,
      sanitizedContent: {
        questions: [],
      },
    }
  },
  created() {
    this.sanitizeContent()
  },
  methods: {
    sanitizeContent() {
      this.sanitizedContent.questions = this.content.questions.map(
        (question) => ({
          text: sanitizeHTML(question.text),
          options: question.options.map((option) => sanitizeHTML(option)),
          correctAnswer: question.correctAnswer,
        })
      )
    },
    submitQuiz() {
      this.score = this.sanitizedContent.questions.reduce(
        (acc, question, index) => {
          return acc + (this.answers[index] === question.correctAnswer ? 1 : 0)
        },
        0
      )
    },
  },
}
</script>
