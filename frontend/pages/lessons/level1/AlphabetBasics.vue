<template>
  <div>
    <h1>Alphabet Basics</h1>
    <Flashcard v-for="card in flashcards" :key="card.front" :front="card.front" :back="card.back" />
    <Quiz :questions="questions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      flashcards: [
        { front: 'A', back: 'Apple' },
        { front: 'B', back: 'Ball' }
      ],
      questions: [
        { question: 'What comes after A?', options: ['B', 'C', 'D'], answer: 'B' }
      ]
    }
  }
}
</script>

