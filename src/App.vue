<script setup>
import { AppProvider } from '@/components/Application';
</script>

<template>
  <div class="bg-gray-800 w-full h-screen flex justify-center">
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </div>
</template>

<style scoped>
</style>
