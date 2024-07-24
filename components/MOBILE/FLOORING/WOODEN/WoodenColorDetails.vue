<template>
  <div class="h-max w-max">
    <WoodColorsMOB v-if="isMobile" />
    <WoodColorsPC v-else />
  </div>
</template>

<script setup>
import WoodColorsMOB from "./Wooden-Colors/WoodColors_MOB.vue";
import WoodColorsPC from "./Wooden-Colors/WoodColors_PC.vue";

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
