<script setup>
import { defineAsyncComponent } from "vue";
import FlooringGridMOB from "./FLOORING-ITEMS/FlooringGridMOB.vue";

// Lazy-load the ComingSoonItem component
const ComingSoonItem = defineAsyncComponent(() =>
  import("./CommingSoonItem.vue")
);
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[3.8vh] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.8vh]">
      <FlooringGridMOB />

      <!-- Lazy-loaded COMING SOON ITEMS -->
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <ComingSoonItem> Fitness Flooring </ComingSoonItem>
        <ComingSoonItem> Flooring Accessories </ComingSoonItem>
      </div>
    </div>
  </section>
</template>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
