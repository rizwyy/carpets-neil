+
<template>
  <div
    class="why-woltiz-container opacity-0 translate-y-[6%] w-[100vw] mx-auto pt-[3rem] pb-[3rem] text-center font-outfit"
  >
    <h2
      class="text-[1.8rem] tracking-[-.1vw] font-[400] mb-[3rem] text-gray-800 h-max w-full text-start px-[4vw]"
    >
      Why Woltiz
    </h2>
    <div class="grid grid-cols-2 gap-[2rem] mx-auto max-w-[90vw]">
      <!-- Free measuring and planning -->
      <div class="flex flex-col items-center gap-[1rem]">
        <rulerIcon class="text-[4rem] text-[#666]" />
        <span class="text-[1rem] font-[400] text-[#333]"
          >Free measuring and planning</span
        >
      </div>

      <!-- Uplift and removal service -->
      <div class="flex flex-col items-center gap-[1rem]">
        <forkLiftIcon class="text-[4rem] text-[#666]" />
        <!-- Add your icon here -->
        <span class="text-[1rem] font-[400] text-[#333]"
          >Uplift and removal service</span
        >
      </div>

      <!-- We’ll arrange fitting -->
      <div class="flex flex-col items-center gap-[1rem]">
        <fittingIcon class="text-[4rem] text-[#666]" />
        <!-- Add your icon here -->
        <span class="text-[1rem] font-[400] text-[#333]"
          >We’ll arrange fitting</span
        >
      </div>

      <!-- Wide Selection -->
      <div class="flex flex-col items-center gap-[1rem]">
        <tapIcon class="text-[4rem] text-[#666]" />
        <!-- Add your icon here -->
        <span class="text-[1rem] font-[400] text-[#333]">Wide Selection</span>
      </div>

      <!-- Free Delivery -->
      <div class="flex flex-col items-center gap-[1rem]">
        <deliveryIcon class="text-[4rem] text-[#666]" />
        <!-- Add your icon here -->
        <span class="text-[1rem] font-[400] text-[#333]">Free Delivery</span>
      </div>

      <!-- Customisation Options -->
      <div class="flex flex-col items-center gap-[1rem]">
        <customisationIcon class="text-[4rem] text-[#666]" />
        <!-- Add your icon here -->
        <span class="text-[1rem] font-[400] text-[#333]"
          >Customisation Options</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import rulerIcon from "~/public/icons/rulerIcon.vue";
import forkLiftIcon from "~/public/icons/forkLiftIcon.vue";
import fittingIcon from "~/public/icons/fittingIcon.vue";
import customisationIcon from "~/public/icons/customisationIcon.vue";
import deliveryIcon from "~/public/icons/deliveryIcon.vue";
import tapIcon from "~/public/icons/tapIcon.vue";

onMounted(() => {
  if (process.client) {
    handleScrollTrigger("why-woltiz-container");
  }
});
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
