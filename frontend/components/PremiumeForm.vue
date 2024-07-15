<!-- components/PremiumeForm.vue -->
<template>
  <div class="payment-container">
    <h2>Payment for Level {{ levelId }}</h2>
    <div class="payment-options">
      <button @click="initiatePayment('paypal')" class="payment-btn paypal">Pay with PayPal</button>
      <button @click="initiatePayment('bank')" class="payment-btn bank">Bank Transfer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const levelId = route.params.levelId;

const initiatePayment = async (method: string) => {
  try {
    // This is where you'd typically make an API call to your backend
    const response = await fetch(`/api/payment/${method}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ levelId }),
    });
    
    if (!response.ok) {
      throw new Error('Payment initiation failed');
    }
    
    const data = await response.json();
    
    // Redirect to the payment provider's page or show further instructions
    if (method === 'paypal') {
      window.location.href = data.paymentUrl;
    } else {
      // Show bank transfer instructions
      alert(data.instructions);
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('There was an error initiating the payment. Please try again.');
  }
};
</script>

<style scoped>
.payment-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.payment-options {
  display: flex;
  flex-direction: column;
}

.payment-btn {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
}

.paypal { background-color: #0070ba; }
.bank { background-color: #28a745; }
</style>
