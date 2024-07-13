<!--Updated components/LoginForm.vue-->

<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required>
    <br>
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  // Login logic here
};
</script>


