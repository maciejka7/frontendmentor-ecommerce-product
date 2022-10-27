<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainNavigation from "./components/MainNavigation.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="cart">Cart</RouterLink>
    </nav>
    <MainNavigation />
  </header>

  <RouterView />
</template>
