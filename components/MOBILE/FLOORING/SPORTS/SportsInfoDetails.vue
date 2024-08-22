<template>
  <div class="h-max w-max">
    <SportsInfoMOB v-if="isMobile" />
    <SportsInfoPC v-else />
  </div>
</template>

<script setup>
import SportsInfoMOB from "./SPORTS-InfoForm/SportsInfoForm_MOB.vue";
import SportsInfoPC from "./SPORTS-InfoForm/SportsInfoForm_PC.vue";
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
