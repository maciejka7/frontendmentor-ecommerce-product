import { onMounted, onUnmounted, ref } from "vue";

export const useResolution = () => {
  const currentWindowWidth = ref(window.innerWidth);

  const resizeCallback = (e: Event) => {
    currentWindowWidth.value = (e.currentTarget as Window).innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", resizeCallback);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeCallback);
  });

  return {
    currentWindowWidth,
  };
};
