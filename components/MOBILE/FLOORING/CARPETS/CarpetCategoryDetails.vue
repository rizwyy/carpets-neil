<template>
  <div class="h-max w-max">
    <CarpetCategoryMOB v-if="isMobile" />
    <CarpetCategoryPC v-else />
  </div>
</template>

<script setup>
import CarpetCategoryMOB from "./CARPETS-Category/CarpetCategory_MOB.vue";
import CarpetCategoryPC from "./CARPETS-Category/CarpetCategory_PC.vue";
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
