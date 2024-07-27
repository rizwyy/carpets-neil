<template>
  <RaisedArea_MOB v-if="isMobile" />
  <RaisedArea_PC v-else />
</template>

<script setup>
import RaisedArea_MOB from "./RAISED-Area/RaisedArea_MOB.vue";
import RaisedArea_PC from "./RAISED-Area/RaisedArea_PC.vue";

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
