<template>
  <GymApplications_MOB v-if="isMobile" />
  <GymApplications_PC v-else />
</template>

<script setup>
import GymApplications_MOB from "./GYM-Applications/GymApplications_MOB.vue";
import GymApplications_PC from "./GYM-Applications/GymApplications_PC.vue";

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
