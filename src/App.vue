<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainNavigation from "./components/MainNavigation.vue";
import { useQueryProvider } from "vue-query";

useQueryProvider();
</script>

<template>
  <header>
    <MainNavigation />
  </header>

  <RouterView />
</template>
