<template>
  <a
    :href="href"
    class="h-[11.2rem] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
  >
    <span
      :class="titleClass"
      class="w-[75%] h-max flooringItem_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
    >
      <slot name="title">{{ title }}</slot>
    </span>
    <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
      <span
        class="flooringItem_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
      >
        view all
      </span>
    </div>
    <div
      class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
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
    default: "50",
  },
});
</script>

<style scoped>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
