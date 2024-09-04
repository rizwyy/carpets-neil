<template>
  <GrassThickness_MOB v-if="isMobile" />
  <GrassThickness_PC v-else />
</template>

<script setup>
import GrassThickness_MOB from "./GRASS-Thickness/GrassThickness_MOB.vue";
import GrassThickness_PC from "./GRASS-Thickness/GrassThickness_PC.vue";

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
