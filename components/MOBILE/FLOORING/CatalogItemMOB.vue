<script setup>
const { name, color, price, currency, src } = defineProps([
  "name",
  "color",
  "price",
  "currency",
  "src",
]);

const route = useRoute();
</script>

<template>
  <div class="h-max w-[46vw] flex flex-col items-center">
    <div class="NuxtImgContainer h-[24vh] w-full overflow-hidden bg-gray-200">
      <NuxtImg
        preload
        placeholder
        quality="80"
        loading="lazy"
        class="object-cover h-full w-full"
        :src="`/carpets/${color}.jpg`"
        :alt="color"
      />
    </div>
    <div
      class="detailsContainer h-max w-full flex flex-col gap-[.4vh] items-start pt-[.8vh] pl-[1vw]"
    >
      <div class="h-max w-full flex items-center justify-between">
        <span class="inline-block text-[2.4vh] text-[#111]">{{ name }}</span>
      </div>
      <span
        class="inline-block flex justify-start text-[1.6vh] w-[100%] text-left text-balance text-[#999]"
        >{{ color }}</span
      >
      <div class="h-max w-max flex flex-col gap-[0vh]">
        <div class="text-[#999] w-max flex justify-between gap-[1.2vw]">
          <span class="flex-1 text-[2vh]"> From </span>
          <span
            class="font-[500] flex-grow flex items-center text-[#111] text-[2vh]"
            >{{ currency }}{{ price }}</span
          >
        </div>
      </div>
      <div class="h-max w-full pt-[.8vh]">
        <button
          class="h-max w-full rounded-sm border-[1px] py-[.4vh] text-[2vh] border-[#444]"
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
