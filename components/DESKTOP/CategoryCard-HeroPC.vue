<script setup>
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
    class="pc-container relative overflow-hidden rounded-xl shadow-lg h-[42vh] w-[42vw] min-[1590px]:h-[36vh] min-[1590px]:w-[32vw] font-outfit"
  >
    <!-- Optimized Image with lazy loading and quality control -->
    <NuxtImg
      class="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
      :src="src || '#'"
      :loading="loading"
      quality="60"
      preload
      placeholder
      alt="Image description"
    />

    <!-- Content Overlay -->
    <div
      class="overlay bg-gradient-to-r from-black to-transparent absolute inset-0 flex flex-col justify-center px-[2vw] gap-[2vh]"
    >
      <span
        class="name-text text-[1.8vw] font-[400] text-[#f1f1f1] leading-tight min-[1590px]:text-[1.5vw]"
      >
        {{ name }}
      </span>
      <span
        class="description-text text-[1.8vh] text-[#ececec] leading-snug min-[1590px]:text-[1.5vh] w-[60%]"
      >
        {{ desc }}
      </span>
      <a
        :href="link"
        class="view-link text-[1.8vh] text-[#fff] font-[400] underline underline-offset-[0.5vh]"
      >
        View all
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
.pc-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  transition: all 0.3s ease;
  overflow: hidden;
}

.pc-container:hover {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.overlay {
  z-index: 1;
  padding: 2vw;
}

.name-text {
  font-size: clamp(1.5vw, 1.8vw, 1.8vw);
}

.description-text {
  font-size: clamp(1.5vh, 1.8vh, 1.8vh);
}

.view-link {
  font-size: clamp(1.5vh, 1.8vh, 1.8vh);
}

.not-available {
  z-index: 10;
}

.font-outfit {
  font-family: "Outfit", sans-serif;
}
</style>
