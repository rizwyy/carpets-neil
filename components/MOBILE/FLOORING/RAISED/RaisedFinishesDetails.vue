<template>
  <RaisedFinishes_MOB v-if="isMobile" />
  <RaisedFinishes_PC v-else />
</template>

<script setup>
import RaisedFinishes_MOB from "./RAISED-Finishes/RaisedFinishes_MOB.vue";
import RaisedFinishes_PC from "./RAISED-Finishes/RaisedFinishes_PC.vue";

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
