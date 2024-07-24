<template>
  <PvcColorsMOB v-if="isMobile" />
  <PvcColorsPC v-else />
</template>

<script setup>
import PvcColorsMOB from "./PVC-Colors/PvcColors_MOB.vue";
import PvcColorsPC from "./PVC-Colors/PvcColors_PC.vue";

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
