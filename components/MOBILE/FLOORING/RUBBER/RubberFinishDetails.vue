<template>
  <RubberFinish_MOB v-if="isMobile" />
  <RubberFinish_PC v-else />
</template>

<script setup>
import RubberFinish_MOB from "./RUBBER-Finish/RubberFinish_MOB.vue";
import RubberFinish_PC from "./RUBBER-Finish/RubberFinish_PC.vue";

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
