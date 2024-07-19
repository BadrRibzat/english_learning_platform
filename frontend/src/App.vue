<!--frontend/src/Main App file-->
<template>
  <div id="app">
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li><router-link to="/level1/lesson1" class="text-white">Level 1 - Lesson 1</router-link></li>
        <li><router-link to="/level1/lesson2" class="text-white">Level 1 - Lesson 2</router-link></li>
        <li><router-link to="/level1/lesson3" class="text-white">Level 1 - Lesson 3</router-link></li>
        <li><router-link to="/level1/lesson4" class="text-white">Level 1 - Lesson 4</router-link></li>
        <li><router-link to="/level1/lesson5" class="text-white">Level 1 - Lesson 5</router-link></li>
        
        <li><router-link to="/level2/lesson1" class="text-white">Level 2 - Lesson 1</router-link></li>
        <li><router-link to="/level2/lesson2" class="text-white">Level 2 - Lesson 2</router-link></li>
        <li><router-link to="/level2/lesson3" class="text-white">Level 2 - Lesson 3</router-link></li>
        <li><router-link to="/level2/lesson4" class="text-white">Level 2 - Lesson 4</router-link></li>
        <li><router-link to="/level2/lesson5" class="text-white">Level 2 - Lesson 5</router-link></li>

        <li><router-link to="/level3/lesson1" class="text-white">Level 3 - Lesson 1</router-link></li>
        <li><router-link to="/level3/lesson2" class="text-white">Level 3 - Lesson 2</router-link></li>
        <li><router-link to="/level3/lesson3" class="text-white">Level 3 - Lesson 3</router-link></li>
        <li><router-link to="/level3/lesson4" class="text-white">Level 3 - Lesson 4</router-link></li>
        <li><router-link to="/level3/lesson5" class="text-white">Level 3 - Lesson 5</router-link></li>

        <li><router-link to="/level4/lesson1" class="text-white">Level 4 - Lesson 1</router-link></li>
        <li><router-link to="/level4/lesson2" class="text-white">Level 4 - Lesson 2</router-link></li>
        <li><router-link to="/level4/lesson3" class="text-white">Level 4 - Lesson 3</router-link></li>
        <li><router-link to="/level4/lesson4" class="text-white">Level 4 - Lesson 4</router-link></li>
        <li><router-link to="/level4/lesson5" class="text-white">Level 4 - Lesson 5</router-link></li>

        <li><router-link to="/level5/lesson1" class="text-white">Level 5 - Lesson 1</router-link></li>
        <li><router-link to="/level5/lesson2" class="text-white">Level 5 - Lesson 2</router-link></li>
        <li><router-link to="/level5/lesson3" class="text-white">Level 5 - Lesson 3</router-link></li>
        <li><router-link to="/level5/lesson4" class="text-white">Level 5 - Lesson 4</router-link></li>
        <li><router-link to="/level5/lesson5" class="text-white">Level 5 - Lesson 5</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
