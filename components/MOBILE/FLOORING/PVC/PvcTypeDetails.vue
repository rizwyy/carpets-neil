<template>
  <PvcTypesMOB v-if="isMobile" />
  <PvcTypesPC v-else />
</template>

<script setup>
import PvcTypesMOB from "./PVC-Types/PvcTypes_MOB.vue";
import PvcTypesPC from "./PVC-Types/PvcTypes_PC.vue";

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
