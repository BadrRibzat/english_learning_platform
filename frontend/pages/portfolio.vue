<!--Updated frontend/pages/portfolio.vue-->

<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-10">
      <h1 class="text-4xl font-bold">Technology Stack</h1>
      <ul class="mt-4">
        <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'Nuxt 3', 'TailwindCSS', 'Auth0', 'FontAwesome', 'Django', 
        'Django REST Framework', 'Python3', 'MongoDB', 'Djongo',
        'Node.js', 'Express.js', 'Docker', 'Google Translate API',
        'ChatterBot', 'Vuex', 'Vuetify', 'Axios', 'ESLint'
      ]
    }
  }
}
</script>



<!--Updated Styles for frontend/pages/portfolio.vue-->

<style scoped>
.container {
  background-color: #d4d4d8;
  border-radius: 8px;
  box-shadow: 0 4px 8px #134e4a;
  padding: 20px;
}
h1 {
  color: #6b7280;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: #a1a1aa;
  color: #3f3f46;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #134e4a;
}
</style>


