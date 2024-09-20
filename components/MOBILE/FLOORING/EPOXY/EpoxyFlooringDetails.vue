<template>
  <EpoxyFlooring_MOB v-if="isMobile" />
  <EpoxyFlooring_PC v-else />
</template>

<script setup>
import EpoxyFlooring_MOB from "./EPOXY-Flooring/EpoxyFlooring_MOB.vue";
import EpoxyFlooring_PC from "./EPOXY-Flooring/EpoxyFlooring_PC.vue";

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
