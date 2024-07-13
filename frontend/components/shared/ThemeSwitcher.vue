<!-- Updated frontend/components/ThemeSwitcher.vue-->
<template>
  <div class="theme-switcher">
    <button @click="setTheme('light')" :class="{ active: currentTheme === 'light' }">Light</button>
    <button @click="setTheme('dark')" :class="{ active: currentTheme === 'dark' }">Dark</button>
    <button @click="setTheme('high-contrast')" :class="{ active: currentTheme === 'high-contrast' }">High Contrast</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: localStorage.getItem('theme') || 'light'
    }
  },
  methods: {
    setTheme(theme) {
      this.currentTheme = theme
      localStorage.setItem('theme', theme)
      document.documentElement.className = theme
    }
  },
  mounted() {
    document.documentElement.className = this.currentTheme
  }
}
</script>



<style scoped>
.theme-switcher button {
  background-color: #a1a1aa;
  color: #3f3f46;
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}
.theme-switcher button.active {
  background-color: #22d3ee;
  color: white;
}
</style>

