<script setup lang="ts">
import { useQuery } from "vue-query";
import DesktopLightBox from "@/components/DesktopLightBox.vue";
import MobileLightBox from "@/components/MobileLightBox.vue";
import LoadingSpinner from "@/components/LodingSpinner.vue";
import { getProducts } from "@/data/products";

import { useResolution } from "@/hooks/useResolution";
import ProductCard from "@/components/ProductCard.vue";

// Query
const { isLoading, isError, data, error } = useQuery(["products"], getProducts);

const { currentWindowWidth } = useResolution();
</script>

<template>
  <main>
    <p v-if="isLoading" class="flex align-middle justify-center">
      <LoadingSpinner />
    </p>
    <p v-if="isError">ERROR !</p>

    <div v-if="data">
      <MobileLightBox
        v-if="currentWindowWidth < 1400"
        :images="data[0].images"
      />
      <DesktopLightBox v-else />
      <ProductCard :product="data[0]" />
    </div>
  </main>
</template>
