<template>
  <div>
    {{ props.product.title }}
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/data/products";

const props = defineProps<{
  product: Product;
}>();
</script>
