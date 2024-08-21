<template>
  <div class="h-max w-max">
    <WoodenInfoMOB v-if="isMobile" />
    <WoodenInfoPC v-else />
  </div>
</template>

<script setup>
import WoodenInfoMOB from "./Wooden-InfoForm/WoodenInfoForm_MOB.vue";
import WoodenInfoPC from "./Wooden-InfoForm/WoodenInfoForm_PC.vue";
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
