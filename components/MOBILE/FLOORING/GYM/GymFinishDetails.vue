<template>
  <GymFinishMOB v-if="isMobile" />
  <GymFinishPC v-else />
</template>

<script setup>
import GymFinishMOB from "./GYM-Finish/GymFinish_MOB.vue";
import GymFinishPC from "./GYM-Finish/GymFinish_PC.vue";

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
