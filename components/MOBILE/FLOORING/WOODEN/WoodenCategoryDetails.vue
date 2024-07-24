<template>
  <div class="h-max w-max">
    <WoodCategoryMOB v-if="isMobile" />
    <WoodCategoryPC v-else />
  </div>
</template>

<script setup>
import WoodCategoryMOB from "./Wooden-Category/WoodCategory_MOB.vue";
import WoodCategoryPC from "./Wooden-Category/WoodCategory_PC.vue";

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
