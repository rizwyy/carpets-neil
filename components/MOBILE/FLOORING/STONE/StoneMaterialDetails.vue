<template>
  <StoneMaterial_MOB v-if="isMobile" />
  <StoneMaterial_PC v-else />
</template>

<script setup>
import StoneMaterial_MOB from "./STONE-Material/StoneMaterial_MOB.vue";
import StoneMaterial_PC from "./STONE-Material/StoneMaterial_PC.vue";

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
