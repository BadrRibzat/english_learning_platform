<template>
  <div id="app">
    <NavBar />
    <div class="main-content">
      <router-view />
    </div>
    <FooterComponent />
    <ContentLoader v-if="loading" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ContentLoader from "@/components/ContentLoader.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
    ContentLoader,
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  padding: 20px;
}

.main-content {
  flex: 1;
  padding: 20px;
}

footer {
  padding: 10px;
  background: #f5f5f5;
  text-align: center;
}
</style>
