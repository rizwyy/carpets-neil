<template>
  <div
    class="why-woltiz-container w-max mx-auto pt-[4vw] pb-[8vw] text-center font-outfit border-t-[.2vh] border-b-[.2vh]"
  >
    <h2
      class="text-[2.5vw] font-[400] mb-[14vh] text-gray-800 h-max w-full text-center px-[4vw]"
    >
      Why Woltiz
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-[4vw] mx-auto max-w-[90vw]">
      <!-- Free measuring and planning -->
      <div class="flex flex-col items-center gap-[2vw]">
        <rulerIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">
          Free measuring and planning
        </span>
      </div>

      <!-- Uplift and removal service -->
      <div class="flex flex-col items-center gap-[2vw]">
        <forkLiftIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">
          Uplift and removal service
        </span>
      </div>

      <!-- We’ll arrange fitting -->
      <div class="flex flex-col items-center gap-[2vw]">
        <fittingIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">
          We’ll arrange fitting
        </span>
      </div>

      <!-- Wide Selection -->
      <div class="flex flex-col items-center gap-[2vw]">
        <tapIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">Wide Selection</span>
      </div>

      <!-- Free Delivery -->
      <div class="flex flex-col items-center gap-[2vw]">
        <deliveryIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">Free Delivery</span>
      </div>

      <!-- Customisation Options -->
      <div class="flex flex-col items-center gap-[2vw]">
        <customisationIcon class="text-[5.4vw] text-[#666]" />
        <span class="text-[1.6vw] font-[400] text-[#333]">
          Customisation Options
        </span>
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
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
