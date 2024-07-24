<template>
  <GymActivities_MOB v-if="isMobile" />
  <GymActivities_PC v-else />
</template>

<script setup>
import GymActivities_MOB from "./GYM-Activities/GymActivities_MOB.vue";
import GymActivities_PC from "./GYM-Activities/GymActivities_PC.vue";

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
