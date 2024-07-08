<template>
  <div class="user-progress">
    <h2>Your Progress</h2>
    <div class="lesson-progress">
      <h3>Lessons Completed</h3>
      <ul>
        <li v-for="progress in lessonProgress" :key="progress.id">
          {{ sanitizeHTML(progress.lesson.title) }} -
          {{ progress.completed ? 'Completed' : 'In Progress' }}
        </li>
      </ul>
    </div>
    <div class="skill-progress">
      <h3>Skill Levels</h3>
      <ul>
        <li v-for="skill in skillProgress" :key="skill.id">
          {{ sanitizeHTML(skill.skill) }}: Level {{ skill.level }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      lessonProgress: [],
      skillProgress: [],
    }
  },
  async mounted() {
    try {
      const lessonProgressResponse = await this.$axios.get(
        '/api/user-progress/'
      )
      this.lessonProgress = lessonProgressResponse.data
      const skillProgressResponse = await this.$axios.get(
        '/api/skill-progress/'
      )
      this.skillProgress = skillProgressResponse.data
    } catch (error) {
      console.error('Error fetching user progress:', error)
    }
  },
  methods: {
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>

<style scoped>
.user-progress {
  /* Add your styles here */
}
</style>
