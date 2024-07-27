<template>
  <RaisedColors_MOB v-if="isMobile" />
  <RaisedColors_PC v-else />
</template>

<script setup>
import RaisedColors_MOB from "./RAISED-Colors/RaisedColors_MOB.vue";
import RaisedColors_PC from "./RAISED-Colors/RaisedColors_PC.vue";

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
