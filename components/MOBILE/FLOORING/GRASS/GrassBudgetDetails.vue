<template>
  <div class="">
    <GrassBudgets_MOB v-if="isMobile" />
    <GrassBudgets_PC v-else />
  </div>
</template>

<script setup>
import GrassBudgets_MOB from "./GRASS-Budgets/GrassBudgets_MOB.vue";
import GrassBudgets_PC from "./GRASS-Budgets/GrassBudgets_PC.vue";

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
