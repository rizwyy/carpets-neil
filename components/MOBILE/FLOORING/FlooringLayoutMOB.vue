<script setup>
import { defineAsyncComponent } from "vue";
const LazyFaqMOB = defineAsyncComponent(() => import("./FaqMOB.vue"));
const LazySignUpCardMOB = defineAsyncComponent(() =>
  import("./SignUpCardMOB.vue")
);
const LazyPersonalAssistanceCardMOB = defineAsyncComponent(() =>
  import("./PersonalAssistanceCardMOB.vue")
);
const LazyDesignerApnaBannerMOB = defineAsyncComponent(() =>
  import("./DesignerApnaBannerMOB.vue")
);

const LazyWhyWoltizMOB = defineAsyncComponent(() => import("./WhyWoltiz.vue"));
import FlooringGridMOB from "./FLOORING-ITEMS/FlooringGridMOB.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const pageLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    handleAutoAlpha("FlooringGridLoadingContainer_MOB", 0);
    pageLoaded.value = true;
  }, 1800);
});
</script>

<template>
  <div
    v-show="!pageLoaded"
    :class="[
      `min-[990px]:hidden h-full FlooringGridLoadingContainer_MOB w-screen overflow-x-hidden max-w-[100vw]  bg-white flex pt-[6rem] text-[#222] justify-center absolute z-[999] ${
        pageLoaded ? 'hidden' : 'block'
      }}`,
    ]"
  >
    <Icon icon="eos-icons:three-dots-loading" class="text-[3rem] text-[#777]" />
  </div>
  <section
    v-show="pageLoaded"
    class="h-max w-max min-[990px]:hidden font-outfit"
  >
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[1.5rem] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[5.8vh] items-center">
      <FlooringGridMOB />
      <div class="h-max w-full flex flex flex-col gap-[4vh] mt-[4vh]">
        <LazySignUpCardMOB />
      </div>
      <LazyPersonalAssistanceCardMOB />

      <div class="h-max w-full flex flex flex-col gap-[2vh]">
        <LazyDesignerApnaBannerMOB />
      </div>
      <LazyWhyWoltizMOB />
      <LazyFaqMOB />
    </div>
  </section>
</template>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
