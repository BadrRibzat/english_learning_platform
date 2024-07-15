<!--pages/callback.vue-->

<template>
  <div>Processing login...</div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'

const { handleRedirectCallback } = useAuth0()
const router = useRouter()

onMounted(async () => {
  await handleRedirectCallback()
  router.push('/')
})
</script>
