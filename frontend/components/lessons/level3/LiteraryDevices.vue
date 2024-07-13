

<template>
  <div>
    <h1>Literary Devices</h1>
    <Flashcard v-for="device in literaryDevices" :key="device" :title="device" :content="device" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flashcard from '~/components/Flashcard.vue';

const literaryDevices = ref(['Metaphor', 'Simile', 'Personification']);
</script>

