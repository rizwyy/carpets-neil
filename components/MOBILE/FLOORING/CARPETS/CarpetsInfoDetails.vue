<template>
  <div class="h-max w-max">
    <CarpetsInfoMOB v-if="isMobile" />
    <CarpetsInfoPC v-else />
  </div>
</template>

<script setup>
import CarpetsInfoMOB from "./CARPETS-InfoForm/CarpetInfoForm_MOB.vue";
import CarpetsInfoPC from "./CARPETS-InfoForm/CarpetInfoForm_PC.vue";
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
