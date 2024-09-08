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
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[3.8vh] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[5.8vh] items-center">
      <FlooringGridMOB />
      <div class="h-max w-full flex flex flex-col gap-[4vh] mt-[4vh]">
        <h2 class="text-[3.8vh] tracking-[-.1vw] ml-[4.8vw]">Sign Up</h2>
        <LazySignUpCardMOB />
      </div>
      <LazyPersonalAssistanceCardMOB />

      <div class="h-max w-full flex flex flex-col gap-[2vh]">
        <h2 class="text-[3.8vh] tracking-[-.1vw] ml-[4.8vw]">
          Designer Discounts
        </h2>
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
