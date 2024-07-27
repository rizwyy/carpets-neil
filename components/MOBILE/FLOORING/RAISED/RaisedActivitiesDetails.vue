<template>
  <RaisedActivityMOB v-if="isMobile" />
  <RaisedActivityPC v-else />
</template>

<script setup>
import RaisedActivityMOB from "./RAISED-Activity/RaisedActivity_MOB.vue";
import RaisedActivityPC from "./RAISED-Activity/RaisedActivity_PC.vue";

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
