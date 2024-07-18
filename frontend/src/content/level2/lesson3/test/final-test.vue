<!-- content/Level2/Lesson3/test/final-test.vue -->

<template>
  <div>
    <h2>Final Test: Food and Meals</h2>
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
          question: "What is typically eaten as the first meal of the day?",
          options: ["Dinner", "Lunch", "Breakfast", "Snack"],
          correctAnswer: "Breakfast"
        },
        {
          question: "What does 'menu' refer to in a restaurant?",
          options: ["A list of dishes available", "A place to sit", "A type of food", "A chef"],
          correctAnswer: "A list of dishes available"
        },
        {
          question: "How do you cook scrambled eggs?",
          options: ["Boil them", "Fry them", "Bake them", "Scramble them"],
          correctAnswer: "Scramble them"
        },
        {
          question: "What are 'countable nouns'?",
          options: ["Nouns that cannot be counted", "Nouns that can be counted individually", "Verbs", "Adjectives"],
          correctAnswer: "Nouns that can be counted individually"
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Add scoped styles for the final test component */
</style>

