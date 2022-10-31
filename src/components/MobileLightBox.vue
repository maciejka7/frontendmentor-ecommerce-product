<template>
  <div class="relative">
    <img :src="`images/${props.images[state.currentImage]}`" alt="" />
    <div class="flex justify-between absolute top-1/2 w-full px-4">
      <button @click="handlePrevImage" :class="buttonStyles">
        <img src="/images/icon-previous.svg" class="h-4" alt="prev button" />
      </button>
      <button @click="handleNextImage" :class="buttonStyles">
        <img src="/images/icon-next.svg" class="h-4" alt="next button" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLightBox } from "@/hooks/useLightBox";

const buttonStyles =
  "bg-white rounded-full shadow p-2 w-10 h-10 flex justify-center items-center";

const props = defineProps<{
  images: string[];
}>();

const { handleNextImage, handlePrevImage, state } = useLightBox(props.images);
</script>
