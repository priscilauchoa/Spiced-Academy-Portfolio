<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header>
    <Menu />
    <div class="wrapper">
     
    </div>
  </header>

  <RouterView />
</template>

<style>

@import url('./assets/dist/build.css');
</style>
