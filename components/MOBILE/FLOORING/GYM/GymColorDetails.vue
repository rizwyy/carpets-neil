<template>
  <GymColors_MOB v-if="isMobile" />
  <GymColors_PC v-else />
</template>

<script setup>
import GymColors_MOB from "./GYM-Colors/GymColors_MOB.vue";
import GymColors_PC from "./GYM-Colors/GymColors_PC.vue";

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
