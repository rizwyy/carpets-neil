<template>
  <div class="h-max w-max">
    <PvcInfoMOB v-if="isMobile" />
    <PvcInfoPC v-else />
  </div>
</template>

<script setup>
import PvcInfoMOB from "./PVC-InfoForm/PvcInfoForm_MOB.vue";
import PvcInfoPC from "./PVC-InfoForm/PvcInfoForm_PC.vue";
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
