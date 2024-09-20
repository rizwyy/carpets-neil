<template>
  <EpoxyType_MOB v-if="isMobile" />
  <EpoxyType_PC v-else />
</template>

<script setup>
import EpoxyType_MOB from "./EPOXY-Type/EpoxyType_MOB.vue";
import EpoxyType_PC from "./EPOXY-Type/EpoxyType_PC.vue";

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
