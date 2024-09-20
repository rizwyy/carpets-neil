<template>
  <MatBase_MOB v-if="isMobile" />
  <MatBase_PC v-else />
</template>

<script setup>
import MatBase_MOB from "./MAT-Base/MatBase_MOB.vue";
import MatBase_PC from "./MAT-Base/MatBase_PC.vue";

const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
