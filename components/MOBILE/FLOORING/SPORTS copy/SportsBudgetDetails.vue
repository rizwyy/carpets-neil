<template>
  <div class="">
    <SportsBudgets_MOB v-if="isMobile" />
    <SportsBudgets_PC v-else />
  </div>
</template>

<script setup>
import SportsBudgets_MOB from "./SPORTS-Budgets/SportBudgets_MOB.vue";
import SportsBudgets_PC from "./SPORTS-Budgets/SportBudgets_PC.vue";

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
