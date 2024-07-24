<template>
  <PVCBudgetsMOB v-if="isMobile" />
  <PVCBudgetsPC v-else />
</template>

<script setup>
import PVCBudgetsMOB from "./PVC-Budgets/PvcBudgets_MOB.vue";
import PVCBudgetsPC from "./PVC-Budgets/PvcBudgets_PC.vue";

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
