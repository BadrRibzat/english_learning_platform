<!--Updated styles frontend/components/FlashCard.vue-->
<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="p-4">
      <div 
        class="h-64 flex items-center justify-center cursor-pointer"
        @click="flipCard"
      >
        <div class="text-center" v-if="showFront">
          <h2 class="text-2xl font-bold mb-2">{{ currentCard.front }}</h2>
          <p class="text-gray-600">Click to reveal answer</p>
        </div>
        <div class="text-center" v-else>
          <h2 class="text-2xl font-bold mb-2">{{ currentCard.back }}</h2>
          <p class="text-gray-600">Click to hide answer</p>
        </div>
      </div>
    </div>
    <div class="px-4 py-2 bg-gray-100 flex justify-between items-center">
      <button 
        @click="prevCard" 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        :disabled="currentIndex === 0"
      >
        Previous
      </button>
      <span>{{ currentIndex + 1 }} / {{ cards.length }}</span>
      <button 
        @click="nextCard" 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        :disabled="currentIndex === cards.length - 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const showFront = ref(true)

const currentCard = computed(() => props.cards[currentIndex.value])

const flipCard = () => {
  showFront.value = !showFront.value
}

const nextCard = () => {
  if (currentIndex.value < props.cards.length - 1) {
    currentIndex.value++
    showFront.value = true
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    showFront.value = true
  }
}
</script>
