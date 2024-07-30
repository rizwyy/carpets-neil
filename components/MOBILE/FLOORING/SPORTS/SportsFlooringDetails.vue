<template>
  <SportFlooring_MOB v-if="isMobile" />
  <SportFlooring_PC v-else />
</template>

<script setup>
import SportFlooring_MOB from "./SPORTS-Flooring/SportFlooring_MOB.vue";
import SportFlooring_PC from "./SPORTS-Flooring/SportFlooring_PC.vue";

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
