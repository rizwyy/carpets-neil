<template>
  <RubberThicknessDetails_MOB v-if="isMobile" />
  <RubberThicknessDetails_PC v-else />
</template>

<script setup>
import RubberThicknessDetails_MOB from "./RUBBER-Thickness/RubberThickness_MOB.vue";
import RubberThicknessDetails_PC from "./RUBBER-Thickness/RubberThickness_PC.vue";

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
