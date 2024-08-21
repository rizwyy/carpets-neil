<template>
  <div class="h-max w-max">
    <GymInfoMOB v-if="isMobile" />
    <GymInfoPC v-else />
  </div>
</template>

<script setup>
import GymInfoMOB from "./GYM-InfoForm/GymInfoForm_MOB.vue";
import GymInfoPC from "./GYM-InfoForm/GymInfoForm_PC.vue";
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
