<!-- frontend/components/ChatBot.vue -->
<template>
  <div class="fixed bottom-4 right-4 w-80">
    <div v-if="isOpen" class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h3 class="font-semibold">English Learning Assistant</h3>
        <button @click="toggleChat" class="text-white hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="h-80 overflow-y-auto p-4 space-y-4">
        <div v-for="(message, index) in messages" :key="index" :class="{ 'text-right': message.sender === 'user' }">
          <div :class="[
            'inline-block p-2 rounded-lg',
            message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'
          ]">
            {{ message.text }}
          </div>
        </div>
      </div>
      <div class="p-4 border-t">
        <form @submit.prevent="sendMessage" class="flex">
          <input v-model="userInput" type="text" placeholder="Type your message..." class="flex-grow border rounded-l-lg p-2">
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
    <button v-else @click="toggleChat" class="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const userInput = ref('')
const messages = ref([
  { sender: 'bot', text: 'Hello! How can I help you with your English learning today?' }
])

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = () => {
  if (userInput.value.trim() === '') return

  // Add user message
  messages.value.push({ sender: 'user', text: userInput.value })

  // Simulate bot response 
  setTimeout(() => {
    const botResponse = getBotResponse(userInput.value)
    messages.value.push({ sender: 'bot', text: botResponse })
  }, 1000)

  userInput.value = ''
}

const getBotResponse = (userMessage) => {
  // Simple response logic 
  const lowerCaseMessage = userMessage.toLowerCase()
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return 'Hello! How can I assist you with your English learning?'
  } else if (lowerCaseMessage.includes('grammar')) {
    return 'Grammar is an important part of language learning. What specific grammar topic would you like help with?'
  } else if (lowerCaseMessage.includes('vocabulary')) {
    return 'Expanding your vocabulary is crucial. Would you like some tips on how to learn new words effectively?'
  } else if (lowerCaseMessage.includes('practice')) {
    return 'Practice is key to improving your English. Have you tried our interactive lessons and quizzes?'
  } else {
    return "I'm sorry, I don't have specific information about that. Can you please rephrase your question or ask about grammar, vocabulary, or practice exercises?"
  }
}
</script>
