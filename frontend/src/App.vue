<template>
  <div id="app">
    <header>
      <nav class="bg-blue-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <router-link to="/" class="text-white font-bold text-xl">{{
                $t("appName")
              }}</router-link>
            </div>
            <div class="flex">
              <router-link
                v-for="(item, index) in navItems"
                :key="index"
                :to="item.path"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center">
          &copy; {{ new Date().getFullYear() }} {{ $t("appName") }}.
          {{ $t("allRightsReserved") }}
        </p>
      </div>
    </footer>

    <chat-bot />
  </div>
</template>

<script>
import ChatBot from "@/components/ChatBot.vue";

export default {
  name: "App",
  components: {
    ChatBot,
  },
  data() {
    return {
      navItems: [
        { name: this.$t("home"), path: "/" },
        { name: this.$t("lessons"), path: "/lessons" },
        { name: this.$t("practice"), path: "/practice" },
        { name: this.$t("progress"), path: "/progress" },
        { name: this.$t("community"), path: "/community" },
        { name: this.$t("about"), path: "/about" },
        { name: this.$t("contact"), path: "/contact" },
      ],
    };
  },
};
</script>
