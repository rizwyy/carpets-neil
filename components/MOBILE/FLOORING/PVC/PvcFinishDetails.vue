<template>
  <PvcFinishMOB v-if="isMobile" />
  <PvcFinishPC v-else />
</template>

<script setup>
import PvcFinishMOB from "./PVC-Finishes/PvcFinish_MOB.vue";
import PvcFinishPC from "./PVC-Finishes/PvcFinish_PC.vue";

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
