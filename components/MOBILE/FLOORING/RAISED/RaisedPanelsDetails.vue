<template>
  <RaisedPanel_MOB v-if="isMobile" />
  <RaisedPanel_PC v-else />
</template>

<script setup>
import RaisedPanel_MOB from "./RAISED-Panels/RaisedPanel_MOB.vue";
import RaisedPanel_PC from "./RAISED-Panels/RaisedPanel_PC.vue";

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
