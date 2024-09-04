<template>
  <RubberColors_MOB v-if="isMobile" />
  <RubberColors_PC v-else />
</template>

<script setup>
import RubberColors_MOB from "./RUBBER-Colors/RubberColors_MOB.vue";
import RubberColors_PC from "./RUBBER-Colors/RubberColors_PC.vue";

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
