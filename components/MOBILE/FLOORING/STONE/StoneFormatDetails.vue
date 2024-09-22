<template>
  <StoneFormat_MOB v-if="isMobile" />
  <StoneFormat_PC v-else />
</template>

<script setup>
import StoneFormat_MOB from "./STONE-Format/StoneFormat_MOB.vue";
import StoneFormat_PC from "./STONE-Format/StoneFormat_PC.vue";

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
