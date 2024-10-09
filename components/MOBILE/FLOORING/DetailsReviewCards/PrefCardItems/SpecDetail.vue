<template>
  <div class="flex items-center w-full">
    <TickIcon />
    <span class="ml-[1vw] w-full text-[1.1rem] text-[#333]">
      <span>{{ label.charAt(0).toUpperCase() + label.slice(1) }}:&nbsp;</span
      >{{ value }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

import TickIcon from "~/public/icons/TickIcon.vue";
</script>

<style scoped></style>
