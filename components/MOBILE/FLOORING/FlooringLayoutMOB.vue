<script setup>
import { defineAsyncComponent } from "vue";
import FaqMOB from "./FaqMOB.vue";
import WhyWoltizMOB from "./WhyWoltiz.vue";
import FlooringGridMOB from "./FLOORING-ITEMS/FlooringGridMOB.vue";
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[3.8vh] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[5.8vh]">
      <FlooringGridMOB />
      <FaqMOB />
      <WhyWoltizMOB />
    </div>
  </section>
</template>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
