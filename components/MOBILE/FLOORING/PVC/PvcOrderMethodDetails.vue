<template>
  <div class="h-max w-max">
    <PvcOrderMethodsMOB v-if="isMobile" />
    <PvcOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import PvcOrderMethodsMOB from "./PVC-OrderMethods/PvcOrderMethods_MOB.vue";
import PvcOrderMethodsPC from "./PVC-OrderMethods/PvcOrderMethods_PC.vue";
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
