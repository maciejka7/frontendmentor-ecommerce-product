import { reactive, watch } from "vue";

export const useLightBox = (items: string[]) => {
  const state: {
    currentImage: number;
    items: string[];
  } = reactive({
    currentImage: 0,
    items,
  });

  const handleNextImage = () => {
    if (state.currentImage === lastItemIndex) {
      state.currentImage = firstItemIndex;
    } else {
      state.currentImage++;
    }
  };
  const handlePrevImage = () => {
    if (state.currentImage === firstItemIndex) {
      state.currentImage = lastItemIndex;
    } else {
      state.currentImage--;
    }
  };

  const lastItemIndex = items.length - 1;
  const firstItemIndex = 0;
  console.log(lastItemIndex);

  return {
    handleNextImage,
    handlePrevImage,
    state,
  };
};
