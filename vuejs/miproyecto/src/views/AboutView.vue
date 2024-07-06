<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ userStore.getUser }}</h2>
    <h2>{{ userStore.getName }}</h2>
    <button @click="userStore.setUser('carlos@outlook.com')">cambiar nombre</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
