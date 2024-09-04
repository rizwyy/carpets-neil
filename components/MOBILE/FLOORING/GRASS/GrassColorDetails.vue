<template>
  <GrassColors_MOB v-if="isMobile" />
  <GrassColors_PC v-else />
</template>

<script setup>
import GrassColors_MOB from "./GRASS-Colors/GrassColors_MOB.vue";
import GrassColors_PC from "./GRASS-Colors/GrassColors_PC.vue";

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
