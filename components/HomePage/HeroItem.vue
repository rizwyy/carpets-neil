<template>
  <a
    v-if="href"
    :href="href"
    class="h-[24vh] z-[1] w-[50%] overflow-hidden rounded-md relative flex flex-col gap-[.8vh] items-start justify-between px-[2vw] pt-[1.8vh] pb-[1.2vh]"
  >
    <span
      class="HeroItem_Text opacity-0 text-gridContainer_heading_MOB font-[500] tracking-[.1vw] leading-[3.2vh] text-[#f1f1f1]"
    >
      {{ title }}
    </span>
    <div class="h-max w-full px-[2vw] flex justify-end">
      <span
        class="HeroItem_Text opacity-0 border-b-[1px] z-[99] text-[#e1e9e5] text-gridContainer_anchor_MOB font-[500]"
        >view all</span
      >
    </div>
    <div
      class="HeroItem_Overlay backdrop-blur-[12px] opacity-[.8] absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
    ></div>
    <NuxtImg
      @load="onLoad"
      :src="imgSrc"
      :alt="altText"
      :loading="loading"
      preload
      placeholder
      class="absolute object-cover object-bottom bottom-0 left-0 h-full w-full z-[-99] flooringLayout_Flooring_Img"
    />
  </a>
  <div
    v-else
    class="h-[24vh] z-[1] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[2vw] pt-[1.8vh] pb-[1.2vh]"
  >
    <div
      class="HeroItem_Text opacity-0 h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
    >
      COMING SOON!
    </div>
    <span
      class="HeroItem_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#fff9]"
    >
      {{ title }}
    </span>
    <div class="h-max w-full px-[2vw] flex justify-end"></div>
    <div
      class="absolute HeroItem_Overlay opacity-0 object-cover bottom-0 left-0 h-full w-full bg-gradient-to-br from-[#000] via-[#0000] to-[#000] from-[10%] via-[70%] z-[-1]"
    ></div>
    <NuxtImg
      @load="onLoad"
      :src="imgSrc"
      :alt="altText"
      :loading="loading"
      class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99] flooringLayout_WallToWall_Img"
    />
  </div>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
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
  loading: {
    type: String,
    default: "lazy",
  },
});
</script>

<style scoped>
.HeroItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
