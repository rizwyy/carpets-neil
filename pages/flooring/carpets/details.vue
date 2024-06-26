<template>
  <div
    class="h-max w-screen flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center"
  >
    <TypeDetails />
    <ColorDetails />
    <MaterialDetails />

    <div class="h-[28vh] w-[90vw] text-center py-[4vh]">
      <span>ENTER YOUR DETAILS</span>
    </div>
  </div>
</template>

<script setup>
import TypeDetails from "./../../../components/MOBILE/FLOORING/TypeDetails.vue";
import ColorDetails from "./../../../components/MOBILE/FLOORING/ColorDetails.vue";
import MaterialDetails from "./../../../components/MOBILE/FLOORING/MaterialDetails.vue";
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
