<!-- content/Level2/Lesson2/test/final-test.vue -->

<template>
  <div>
    <h2>Final Test: Clothing and Shopping</h2>
    <!-- Actual test questions and options go here -->
    <ul>
      <li>{{ questions[0].question }}</li>
      <ul>
        <li v-for="(option, index) in questions[0].options" :key="index">
          {{ option }}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "What do you wear on your legs?",
          options: ["Shirt", "Pants", "Dress", "Shoes"],
          correctAnswer: "Pants"
        },
        {
          question: "Where do you buy clothes?",
          options: ["Store", "Restaurant", "Park", "School"],
          correctAnswer: "Store"
        },
        {
          question: "What did Anna buy last week?",
          options: ["Shirt and Shoes", "Dress and Shoes", "Pants and Shirt", "Pants and Dress"],
          correctAnswer: "Dress and Shoes"
        },
        {
          question: "What does 'this' refer to?",
          options: ["Objects that are near you or close in time", "Objects that are farther away or further in time", "Objects in general", "Specific items"],
          correctAnswer: "Objects that are near you or close in time"
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Add scoped styles for the final test component */
</style>

