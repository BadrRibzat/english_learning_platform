<!-- frontend/components/ProtectedContent.vue -->
<template>
  <div>
    <h2>Protected Content</h2>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error.message }}</p>
    <p v-else>{{ data?.message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig, useFetch } from '#app';
import { useAuth0 } from '@auth0/auth0-vue';

// Inject the useAuth0 function
const { useAuth0: _useAuth0 } = inject('useAuth0', () => {
  throw new Error('useAuth0 is not provided');
});

const { getAccessTokenSilently } = _useAuth0();
const config = useRuntimeConfig();

const data = ref(null);
const error = ref(null);
const loading = ref(true);

async function fetchProtectedData() {
  try {
    loading.value = true;
    const token = await getAccessTokenSilently();
    const response = await $fetch(`${config.public.apiUrl}/api/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      onRequest({ request, options }) {
        // Add any request-specific logic here
      },
      onRequestError({ request, options, error }) {
        // Handle request errors here
        console.error('Request error:', error);
      },
      onResponse({ request, response, options }) {
        // Handle successful responses here
      },
      onResponseError({ request, response, options, error }) {
        // Handle response errors here
        console.error('Response error:', error);
      },
    });
    data.value = response;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}

// Fetch protected data on component setup
onMounted(fetchProtectedData);
</script>
