<template>
  <div class="">
    <AccessoriesBudgets_MOB v-if="isMobile" />
    <AccessoriesBudgets_PC v-else />
  </div>
</template>

<script setup>
import AccessoriesBudgets_MOB from "./ACCESSORIES-Budgets/AccessoriesBudgets_MOB.vue";
import AccessoriesBudgets_PC from "./ACCESSORIES-Budgets/AccessoriesBudgets_PC.vue";

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
