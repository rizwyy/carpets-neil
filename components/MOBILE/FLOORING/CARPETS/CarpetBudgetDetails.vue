<template>
  <div class="h-max w-max">
    <CarpetBudgetsMOB v-if="isMobile" />
    <CarpetBudgetsPC v-else />
  </div>
</template>

<script setup>
import CarpetBudgetsMOB from "./CARPETS-Budgets/CarpetBudgets_MOB.vue";
import CarpetBudgetsPC from "./CARPETS-Budgets/CarpetBudgets_PC.vue";
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
