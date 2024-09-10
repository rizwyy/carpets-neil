<script setup>
import arrowRightIcon from "./../../public/icons/arrowRightIcon.vue";
defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    required: true,
  },
  loading: {
    type: String,
    default: "lazy",
  },
});
</script>

<template>
  <div
    class="hover:shadow-2xl hover:scale-[1.0001] active:scale-[1] hover:translate-y-[-2%] flex flex-col justify-start items-start transition-all duration-300 ease-in-out overflow-auto relative rounded-xl shadow-lg h-[42vh] w-[42vw] min-[1590px]:h-[36vh] min-[1590px]:w-[32vw] font-outfit"
  >
    <!-- Optimized Image with lazy loading and quality control -->
    <NuxtImg
      class="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
      :src="src || '#'"
      :loading="loading"
      preload
      placeholder
      alt="Image description"
    />

    <!-- Content Overlay -->
    <div
      class="overlay bg-gradient-to-t from-black to-transparent h-full w-full inset-0 flex items-end justify-between pb-[2.4vh] px-[2vw]"
    >
      <span
        class="text-[2.4vw] font-[400] text-[#f1f1f1] leading-tight min-[1590px]:text-[2vw]"
      >
        {{ name }}
      </span>

      <a
        :href="link"
        class="text-[1.2vw] text-[#fff9] font-[500] flex items-center"
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
  </div>
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
