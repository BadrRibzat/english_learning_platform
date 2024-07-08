<!-- frontend/components/Flashcard.vue -->

<template>
  <div class="flashcard" @click="flip">
    <div :class="['flashcard-inner', { 'is-flipped': isFlipped }]">
      <div class="flashcard-front">
        <p>{{ flashcard.front_text }}</p>
        <img
          v-if="flashcard.image"
          :src="flashcard.image"
          alt="Flashcard image"
        />
      </div>
      <div class="flashcard-back">
        <p>{{ flashcard.back_text }}</p>
        <audio v-if="flashcard.audio" :src="flashcard.audio" controls></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flashcard: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
    }
  },
  methods: {
    flip() {
      this.isFlipped = !this.isFlipped
    },
  },
}
</script>

<style scoped>
.flashcard {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}
.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flashcard-inner.is-flipped {
  transform: rotateY(180deg);
}
.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.flashcard-back {
  transform: rotateY(180deg);
}
</style>
