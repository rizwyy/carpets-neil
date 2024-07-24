<template>
  <div class="h-max w-max">
    <WoodTypesMOB v-if="isMobile" />
    <WoodTypesPC v-else />
  </div>
</template>

<script setup>
import WoodTypesMOB from "./Wooden-Types/WoodTypes_MOB.vue";
import WoodTypesPC from "./Wooden-Types/WoodTypes_PC.vue";

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
