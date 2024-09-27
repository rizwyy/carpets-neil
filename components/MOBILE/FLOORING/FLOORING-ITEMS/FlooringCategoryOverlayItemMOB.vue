<template>
  <a
    :href="href"
    class="h-[7.6rem] w-full rounded-[8px] overflow-hidden relative flex flex-col gap-[.4rem] items-center justify-between px-[1.8vw] pt-[.9rem] pb-[.6rem] shadow-xl"
  >
    <span
      :class="titleClass"
      class="w-[100%] h-max text-[1.4rem] font-[400] leading-[1.6rem] z-[1] text-[#f1f1f1]"
    >
      <slot name="title">{{ title }}</slot>
    </span>

    <span class="h-max w-full flex justify-end text-[1.5rem] text-[#f1f1f1]">
      <Icon icon="material-symbols:arrow-outward-rounded" />
    </span>
    <div
      class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-[#000] bg-opacity-[.4]"
    ></div>
    <NuxtImg
      preload
      :src="imgSrc"
      :alt="altText"
      :loading="loading"
      :quality="quality"
      placeholder
      class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
    />
  </a>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import ArrowGoIcon from "~/public/icons/ArrowGoIcon.vue";

defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "",
  },
  onLoad: {
    type: Function,
    default: () => {},
  },
  titleClass: {
    type: String,
    default: "",
  },
  loading: {
    type: String,
    default: "eager",
  },
  quality: {
    type: [String, Number],
    default: "100",
  },
});
</script>

<style scoped>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
