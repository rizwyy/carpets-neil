<template>
  <PvcCategoryMOB v-if="isMobile" />
  <PvcCategoryPC v-else />
</template>

<script setup>
import PvcCategoryMOB from "./PVC-Category/PvcCategory_MOB.vue";
import PvcCategoryPC from "./PVC-Category/PvcCategory_PC.vue";

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
