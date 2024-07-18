<!--content/Level1/Lesson1/speaking/speaking.vue-->

<template>
  <div>
    <h2>Speaking Practice: Introduce Yourself</h2>
    <p>Practice introducing yourself to a partner or recording yourself.</p>
    <div class="practice">
      <h3>Instructions:</h3>
      <ul>
        <li>Use the phrases learned in the lesson to introduce yourself.</li>
        <li>Include your name, greeting, and a simple sentence about yourself.</li>
      </ul>
      <textarea v-model="selfIntroduction" placeholder="Practice your introduction here"></textarea>
      <button @click="submitPractice">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakingComponent',
  data() {
    return {
      selfIntroduction: ''
    };
  },
  methods: {
    submitPractice() {
      // Example: Save or process the selfIntroduction data
      console.log('Submitted self introduction:', this.selfIntroduction);
      alert('Practice submitted!');
    }
  }
}
</script>

<style scoped>
/* Your component styles here */
</style>

