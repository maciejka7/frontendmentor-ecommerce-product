<template>
  <div class="relative h-[300px]">
    <TransitionGroup name="fade">
      <img
        class="absolute h-[300px] max-h-fit object-cover w-full"
        :key="state.currentImage"
        :src="`images/${props.images[state.currentImage]}`"
        alt=""
      />
    </TransitionGroup>
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
  "rounded-full shadow p-2 w-10 h-10 flex justify-center items-center bg-[#fff] block";

const props = defineProps<{
  images: string[];
}>();

const { handleNextImage, handlePrevImage, state } = useLightBox(props.images);
</script>

<style>
.fade-enter-active {
  animation: fade-in 1s;
}

.fade-leave-active {
  animation: fade-in 1s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
