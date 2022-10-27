<script setup lang="ts">
import DesktopLightBox from "@/components/DesktopLightBox.vue";
import MobileLightBoxVue from "@/components/MobileLightBox.vue";

import { useResolution } from "@/hooks/useResolution";

const { currentWindowWidth } = useResolution();
</script>

<template>
  <main>
    <MobileLightBoxVue v-if="currentWindowWidth < 1400" />
    <DesktopLightBox v-else />
  </main>
</template>
