<!-- content/Level1/Lesson2/speaking/speaking.vue -->

<template>
  <div>
    <h2>Speaking Practice: Counting Objects</h2>
    <p>Practice counting objects in a picture or with a partner.</p>
    <div class="practice">
      <h3>Instructions:</h3>
      <ul>
        <li>Use the vocabulary learned in this lesson to count objects.</li>
        <li>Describe how many of each object you see in the picture or room.</li>
      </ul>
      <textarea v-model="countingPractice" placeholder="Practice counting here"></textarea>
      <button @click="submitPractice">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakingComponent',
  data() {
    return {
      countingPractice: ''
    };
  },
  methods: {
    submitPractice() {
      // Example: Save or process the countingPractice data
      console.log('Submitted counting practice:', this.countingPractice);
      alert('Practice submitted!');
    }
  }
}
</script>

<style scoped>
/* Your component styles here */
</style>

