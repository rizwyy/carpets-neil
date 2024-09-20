<template>
  <EpoxyColors_MOB v-if="isMobile" />
  <EpoxyColors_PC v-else />
</template>

<script setup>
import EpoxyColors_MOB from "./EPOXY-Colors/EpoxyColors_MOB.vue";
import EpoxyColors_PC from "./EPOXY-Colors/EpoxyColors_PC.vue";

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
