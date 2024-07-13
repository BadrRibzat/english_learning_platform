<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
    <div class="max-w-2xl mx-auto">
      <p class="mb-6">Have questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
      
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block mb-1 font-medium">Name:</label>
          <input type="text" id="name" v-model="name" required class="w-full px-3 py-2 border rounded-md">
        </div>
        
        <div>
          <label for="email" class="block mb-1 font-medium">Email:</label>
          <input type="email" id="email" v-model="email" required class="w-full px-3 py-2 border rounded-md">
        </div>
        
        <div>
          <label for="subject" class="block mb-1 font-medium">Subject:</label>
          <input type="text" id="subject" v-model="subject" required class="w-full px-3 py-2 border rounded-md">
        </div>
        
        <div>
          <label for="message" class="block mb-1 font-medium">Message:</label>
          <textarea id="message" v-model="message" required class="w-full px-3 py-2 border rounded-md" rows="5"></textarea>
        </div>
        
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
      </form>
      
      <div v-if="formSubmitted" class="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
        Thank you for your message! We'll get back to you soon.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const formSubmitted = ref(false)

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', { name: name.value, email: email.value, subject: subject.value, message: message.value })
  
  // Reset form and show success message
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  formSubmitted.value = true
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    formSubmitted.value = false
  }, 5000)
}
</script>
