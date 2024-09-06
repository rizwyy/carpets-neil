<template>
  <RubberApplication_MOB v-if="isMobile" />
  <RubberApplication_PC v-else />
</template>

<script setup>
import RubberApplication_MOB from "./RUBBER-Application/RubberApplication_MOB.vue";
import RubberApplication_PC from "./RUBBER-Application/RubberApplication_PC.vue";

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
