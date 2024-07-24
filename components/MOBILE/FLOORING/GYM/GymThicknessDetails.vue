<template>
  <GymThickness_MOB v-if="isMobile" />
  <GymThickness_PC v-else />
</template>

<script setup>
import GymThickness_MOB from "./GYM-Thickness/GymThickness_MOB.vue";
import GymThickness_PC from "./GYM-Thickness/GymThickness_PC.vue";

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
