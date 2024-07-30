<template>
  <SportColors_MOB v-if="isMobile" />
  <SportColors_PC v-else />
</template>

<script setup>
import SportColors_MOB from "./SPORTS-Colors/SportColors_MOB.vue";
import SportColors_PC from "./SPORTS-Colors/SportColors_PC.vue";

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
