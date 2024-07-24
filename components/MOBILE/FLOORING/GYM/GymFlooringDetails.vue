<template>
  <GymFlooring_MOB v-if="isMobile" />
  <GymFlooring_PC v-else />
</template>

<script setup>
import GymFlooring_MOB from "./GYM-Flooring/GymFlooring_MOB.vue";
import GymFlooring_PC from "./GYM-Flooring/GymFlooring_PC.vue";

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
