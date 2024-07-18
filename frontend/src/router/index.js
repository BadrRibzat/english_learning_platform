import { createRouter, createWebHistory, VueRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LessonsView from "@/views/LessonsView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import AdminView from "@/views/AdminView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/lessons", name: "Lessons", component: LessonsView },
    { path: "/about", name: "About", component: AboutView },
    { path: "/contact", name: "Contact", component: ContactView },
    {
      path: "/admin",
      name: "Admin",
      component: AdminView,
      meta: { requiresAuth: true },
    },
    { path: "/profile", name: "UserProfile", component: UserProfileView },
    { path: "/login", name: "Login", component: LoginView },
    { path: "/register", name: "Register", component: RegisterView },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

function isAuthenticated() {
  // Implement your authentication check here
  return false;
}

export default router;
