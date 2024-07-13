//Updated frontend/store/auth.ts

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
  actions: {
    setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
  },
});

