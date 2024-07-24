<template>
  <div class="h-max w-max">
    <WoodBudgetDetailsMOB v-if="isMobile" />
    <WoodBudgetDetailsPC v-else />
  </div>
</template>

<script setup>
import WoodBudgetDetailsMOB from "./Wooden-Budgets/WoodBudgets_MOB.vue";
import WoodBudgetDetailsPC from "./Wooden-Budgets/WoodBudgets_PC.vue";

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
