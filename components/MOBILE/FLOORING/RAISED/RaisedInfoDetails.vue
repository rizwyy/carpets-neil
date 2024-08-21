<template>
  <div class="h-max w-max">
    <RaisedInfoMOB v-if="isMobile" />
    <RaisedInfoPC v-else />
  </div>
</template>

<script setup>
import RaisedInfoMOB from "./Raised-InfoForm/RaisedInfoForm_MOB.vue";
import RaisedInfoPC from "./Raised-InfoForm/RaisedInfoForm_PC.vue";
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
