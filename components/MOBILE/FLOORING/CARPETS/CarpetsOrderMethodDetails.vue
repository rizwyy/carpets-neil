<template>
  <div class="h-max w-max">
    <CarpetOrderMethodsMOB v-if="isMobile" />
    <CarpetOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import CarpetOrderMethodsMOB from "./CARPETS-OrderMethods/CarpetOrderMethods_MOB.vue";
import CarpetOrderMethodsPC from "./CARPETS-OrderMethods/CarpetOrderMethods_PC.vue";
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
