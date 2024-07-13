<!--Updated components/RegisterForm.vue-->

<template>
  <form @submit.prevent="register">
    <label for="fullName">Full Name:</label>
    <input type="text" id="fullName" v-model="fullName" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required>
    <br>
    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" v-model="confirmPassword" required>
    <br>
    <button type="submit">Register</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  // Registration logic here
};
</script>

