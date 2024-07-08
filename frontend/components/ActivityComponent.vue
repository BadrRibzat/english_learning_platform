<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="bg-blue-600 text-white p-4">
      <h2 class="text-xl font-bold">{{ activityTitle }}</h2>
    </div>
    <div class="p-6">
      <component :is="activityComponent" :content="sanitizedContent" />
    </div>
  </div>
</template>

<script>
import QuizActivity from './activities/QuizActivity.vue'
import FlashcardsActivity from './activities/FlashcardsActivity.vue'
import WritingActivity from './activities/WritingActivity.vue'
import ListeningActivity from './activities/ListeningActivity.vue'
import SpeakingActivity from './activities/SpeakingActivity.vue'
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  components: {
    QuizActivity,
    FlashcardsActivity,
    WritingActivity,
    ListeningActivity,
    SpeakingActivity,
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sanitizedContent: {},
    }
  },
  computed: {
    activityTitle() {
      const titles = {
        quiz: 'Quiz',
        flashcards: 'Flashcards',
        writing: 'Writing Exercise',
        listening: 'Listening Exercise',
        speaking: 'Speaking Exercise',
      }
      return titles[this.activity.activity_type]
    },
    activityComponent() {
      const components = {
        quiz: 'QuizActivity',
        flashcards: 'FlashcardsActivity',
        writing: 'WritingActivity',
        listening: 'ListeningActivity',
        speaking: 'SpeakingActivity',
      }
      return components[this.activity.activity_type]
    },
  },
  created() {
    this.sanitizeContent()
  },
  methods: {
    sanitizeContent() {
      if (this.activity.activity_type === 'quiz') {
        this.sanitizedContent.questions = this.activity.content.questions.map(
          (question) => ({
            text: sanitizeHTML(question.text),
            options: question.options.map((option) => sanitizeHTML(option)),
            correctAnswer: question.correctAnswer,
          })
        )
      } else {
        this.sanitizedContent = sanitizeHTML(this.activity.content)
      }
    },
  },
}
</script>
