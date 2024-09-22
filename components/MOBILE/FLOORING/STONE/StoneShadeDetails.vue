<template>
  <StoneShade_MOB v-if="isMobile" />
  <StoneShade_PC v-else />
</template>

<script setup>
import StoneShade_MOB from "./STONE-Shade/StoneShade_MOB.vue";
import StoneShade_PC from "./STONE-Shade/StoneShade_PC.vue";

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
