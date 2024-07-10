<!-- frontend/pages/portfolio.vue -->

<template>
  <div class="container">
    <h2>Badr Ribzat's Portfolio</h2>
    <div class="portfolio-info">
      <p><strong>Email:</strong> badrribzat@gmail.com</p>
      <p><strong>Full Name:</strong> Badr Ribzat</p>
      <p><strong>Phone Number:</strong> +212627764176</p>
      <p><strong>Location:</strong> Morocco</p>
    </div>
    <div class="certifications">
      <h3>Certifications</h3>
      <!-- Add your certifications here -->
    </div>
    <div class="proficiency-meter">
      <h3>Top 30 Technologies Proficiency</h3>
      <div class="meter">
        <div class="meter-fill" style="width: 50%;"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-info {
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.meter {
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: #4caf50;
}
</style>
