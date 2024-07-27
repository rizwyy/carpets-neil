<template>
  <RaisedApplicationMOB v-if="isMobile" />
  <RaisedApplicationPC v-else />
</template>

<script setup>
import RaisedApplicationMOB from "./RAISED-Application/RaisedApplicaton_MOB.vue";
import RaisedApplicationPC from "./RAISED-Application/RaisedApplication_PC.vue";
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
