<template>
  <div class="h-max w-max">
    <CarpetsColorsMOB v-if="isMobile" />
    <CarpetsColorsPC v-else />
  </div>
</template>

<script setup>
import CarpetsColorsMOB from "./CARPETS-Colors/CarpetColors_MOB.vue";
import CarpetsColorsPC from "./CARPETS-Colors/CarpetColors_PC.vue";
const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<style scoped></style>
