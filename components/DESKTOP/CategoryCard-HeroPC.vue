<script setup>
import arrowRightIcon from "./../../public/icons/arrowRightIcon.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "", // If no description is provided, we use a default empty string.
  },
  src: {
    type: String,
    required: true, // Ensure the source is required for the image.
  },
  isAvailable: {
    type: Boolean,
    default: true, // Default value to true.
  },
  link: {
    type: String,
    required: true, // The link is required.
  },
  loading: {
    type: String,
    default: "lazy", // Set default to lazy for image loading optimization.
  },
  quality: {
    type: [String, Number],
    default: "100",
  },
  onLoad: {
    type: Function,
    default: () => {}, // Provide a default no-op function if onLoad is not passed.
  },
});
</script>

<template>
  <a
    :href="link"
    class="hover:shadow-2xl hover:translate-y-[-1%] flex flex-col justify-start items-start transition-all duration-300 ease-in-out overflow-auto relative rounded-xl shadow-lg h-[42vh] w-[42vw] min-[1590px]:h-[36vh] min-[1590px]:w-[32vw] font-outfit"
  >
    <!-- Optimized Image with lazy loading and quality control -->
    <NuxtImg
      class="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
      :src="src || '#'"
      :loading="loading"
      :quality="quality"
      preload
      placeholder
      @load="onLoad"
      alt="Image description"
    />

    <!-- Content Overlay -->
    <div
      class="absolute h-full w-full transition-all duration-[.4s] ease-in-out bg-gradient-to-t from-black hover:to-[70%] to-transparent z-[-1]"
    ></div>
    <div
      class="h-full w-full inset-0 flex items-end justify-between pb-[2.4vh] px-[2vw] z-[1]"
    >
      <span
        class="text-[2.4vw] flooringItem_Text opacity-0 font-[400] text-[#f1f1f1] leading-tight min-[1590px]:text-[2vw]"
      >
        {{ name }}
      </span>

      <a
        :href="link"
        class="flooringItem_Text opacity-0 text-[1.2vw] text-[#fff9] font-[500] flex items-center"
      >
        View All <arrowRightIcon class="text-[2vw]" />
      </a>
    </div>

    <!-- Not Available Banner -->
    <div
      v-if="!isAvailable"
      class="not-available absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-[1px]"
    >
      <span
        class="text-center bg-[#444] bg-opacity-80 text-[#fff] py-[2vh] w-full min-[1590px]:text-[2.4vh]"
      >
        NOT AVAILABLE
      </span>
    </div>
  </a>
</template>

<style scoped>
.pc-container:hover {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.description-text {
  font-size: clamp(1.5vh, 2vh, 2vh);
}

.not-available {
  z-index: 10;
}

.font-outfit {
  font-family: "Outfit", sans-serif;
}
</style>
