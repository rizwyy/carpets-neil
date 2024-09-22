<template>
  <StoneEffect_MOB v-if="isMobile" />
  <StoneEffect_PC v-else />
</template>

<script setup>
import StoneEffect_MOB from "./STONE-Effect/StoneEffect_MOB.vue";
import StoneEffect_PC from "./STONE-Effect/StoneEffect_PC.vue";

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
