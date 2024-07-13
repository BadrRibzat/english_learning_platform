<!--frontend/components/Quize.vue-->
<template>
  <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">{{ quiz.title }}</h2>
      <div v-if="!quizCompleted">
        <div class="mb-4">
          <p class="text-lg font-semibold">{{ currentQuestion.question }}</p>
          <div class="mt-2 space-y-2">
            <div 
              v-for="(option, index) in currentQuestion.options" 
              :key="index"
              class="flex items-center"
            >
              <input 
                type="radio" 
                :id="'option' + index" 
                :value="option" 
                v-model="selectedAnswer"
                class="mr-2"
              >
              <label :for="'option' + index">{{ option }}</label>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <button 
            @click="prevQuestion" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            :disabled="currentQuestionIndex === 0"
          >
            Previous
          </button>
          <span>{{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</span>
          <button 
            @click="nextQuestion" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            :disabled="currentQuestionIndex === quiz.questions.length - 1"
          >
            {{ currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next' }}
          </button>
        </div>
      </div>
      <div v-else>
        <h3 class="text-xl font-semibold mb-2">Quiz Completed!</h3>
        <p>Your score: {{ score }} / {{ quiz.questions.length }}</p>
        <button 
          @click="restartQuiz" 
          class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  quiz: {
    type: Object,
    required: true
  }
})

const currentQuestionIndex = ref(0)
const selectedAnswer = ref('')
const userAnswers = ref([])
const quizCompleted = ref(false)

const currentQuestion = computed(() => props.quiz.questions[currentQuestionIndex.value])

const score = computed(() => {
  return userAnswers.value.filter((answer, index) => 
    answer === props.quiz.questions[index].correctAnswer
  ).length
})

const nextQuestion = () => {
  userAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
  if (currentQuestionIndex.value < props.quiz.questions.length - 1) {
    currentQuestionIndex.value++
    selectedAnswer.value = ''
  } else {
    quizCompleted.value = true
  }
}

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    selectedAnswer.value = userAnswers.value[currentQuestionIndex.value] || ''
  }
}

const restartQuiz = () => {
  currentQuestionIndex.value = 0
  selectedAnswer.value = ''
  userAnswers.value = []
  quizCompleted.value = false
}
</script>
