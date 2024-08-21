<template>
  <div class="h-max w-max">
    <WoodenOrderDetailsMOB v-if="isMobile" />
    <WoodenOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import WoodenOrderDetailsMOB from "./Wooden-OrderMethods/WoodenOrderMethods_MOB.vue";
import WoodenOrderMethodsPC from "./Wooden-OrderMethods/WoodenOrderMethods_PC.vue";
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
