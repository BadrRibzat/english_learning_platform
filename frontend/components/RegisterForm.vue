<!-- components/RegisterForm.vue -->
<template>
  <div class="form-container">
    <h2>Register for Level {{ levelId }}</h2>
    <form @submit.prevent="handleSubmit" class="register-form">
      <input v-model="name" type="text" placeholder="Full Name" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit" class="submit-btn">Register</button>
    </form>
    <div class="social-login">
      <button @click="socialLogin('facebook')" class="social-btn facebook">Facebook</button>
      <button @click="socialLogin('instagram')" class="social-btn instagram">Instagram</button>
      <button @click="socialLogin('linkedin')" class="social-btn linkedin">LinkedIn</button>
      <button @click="socialLogin('github')" class="social-btn github">GitHub</button>
      <button @click="socialLogin('tiktok')" class="social-btn tiktok">TikTok</button>
      <button @click="socialLogin('google')" class="social-btn google">Google</button>
    </div>
    <p>Already have an account? <a @click="navigateToLogin" class="link">Login here</a></p>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const levelId = route.params.levelId;

const name = ref('');
const email = ref('');
const password = ref('');
const handleSubmit = () => {

  // Handle form submission
console.log('Form submitted', { name: name.value, email: email.value, password: password.value });
};

const socialLogin = (platform: string) => {
  // Handle social media login
  console.log('Social login with', platform);
};

const navigateToLogin = () => {
  router.push({ name: 'login', params: { levelId } });
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.register-form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn, .social-btn {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
}

.social-btn {
  color: white;
}

.facebook { background-color: #3b5998; }
.instagram { background-color: #c13584; }
.linkedin { background-color: #0077b5; }
.github { background-color: #24292e; }
.tiktok { background-color: #000000; }
.google { background-color: #db4437; }

.link {
  color: #4CAF50;
  cursor: pointer;
}
</style>

