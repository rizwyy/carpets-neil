<template>
  <a
    :href="href"
    class="h-[16vh] w-[42%] rounded-[10px] overflow-hidden relative flex flex-col gap-[.8vh] items-center justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh] shadow-xl"
  >
    <span
      :class="titleClass"
      class="w-[100%] h-max flooringItem_Text_PC opacity-0 text-[2.8vh] font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
    >
      <slot name="title">{{ title }}</slot>
    </span>
    <!-- <button
      class="text-[#ddd] border-[1px] rounded-full px-[2vw] py-[.8vh] text-[1.4vh] font-[500] tracking-[.1vw]"
    >
      SELECT
    </button> -->
    <span
      class="flooringItem_Text_PC opacity-0 h-max w-full flex justify-end text-[3vh] text-[#f1f1f1]"
    >
      <ArrowGoIcon />
    </span>
    <div
      class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-[#000] bg-opacity-[1]"
    ></div>
    <NuxtImg
      preload
      @load="onLoad"
      :src="imgSrc"
      :alt="altText"
      :loading="loading"
      :quality="quality"
      placeholder
      class="flooringItem_Img absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
    />
  </a>
</template>

<script setup>
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
