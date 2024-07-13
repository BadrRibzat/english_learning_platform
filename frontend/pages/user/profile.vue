<!--frontend/pages/user/profile.vue-->

<template>
  <div>
    <h1>User Profile</h1>
    <UserProfile :user="user" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        progress: {
          level1: 50,
          level2: 30
        }
      }
    }
  }
}
</script>

