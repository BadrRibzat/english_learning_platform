<!-- frontend/pages/contact.vue -->

<template>
  <div>
    <div v-html="sanitizeHTML(userContent)"></div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
      <form class="max-w-lg mx-auto" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
            >Name</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label
            for="message"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      userContent: `
        <p>Dynamic content from the backend or user input goes here.</p>
        &lt;script&gt;alert("XSS attack!")&lt;/script&gt;
      `,
    }
  },
  methods: {
    async submitForm() {
      try {
        // Simulate sending data to backend with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log('Form submitted:', this.form)
        this.$toast.success('Message sent successfully!')
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('Error submitting form:', error)
        this.$toast.error('Failed to send message. Please try again.')
      }
    },
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>
