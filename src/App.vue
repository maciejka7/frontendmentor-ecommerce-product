<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="cart">Cart</RouterLink>
    </nav>
    <Navigation />
  </header>

  <RouterView />
</template>
