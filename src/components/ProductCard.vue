<template>
  <div class="p-6">
    <h3 class="font-bold text-primary uppercase pb-4">
      {{ product.vendor }}
    </h3>
    <h2 class="font-bold text-[28px] pb-4">{{ product.title }}</h2>
    <p class="text-gray-500 font-semibold pb-4">
      {{ product.description }}
    </p>
    <div class="flex pb-4 items-center justify-between">
      <p class="font-bold text-[28px] tracking-tighter mr-5">
        ${{ priceAfterDiscount.toFixed(2) }}
      </p>
      <p class="rounded bg-[#FCF1E8] text-primary font-bold px-1 mr-auto">
        {{ product.discount }}%
      </p>
      <p class="text-gray-400 font-bold line-through">
        ${{ product.basePrise.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/data/products";
import { computed } from "vue";

const props = defineProps<{
  product: Product;
}>();
// 50% = x * 0.%
const priceAfterDiscount = computed(
  () => props.product.basePrise * (props.product.discount / 100)
);
</script>
