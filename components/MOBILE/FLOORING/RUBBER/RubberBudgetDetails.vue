<template>
  <div class="">
    <RubberBudgets_MOB v-if="isMobile" />
    <RubberBudgets_PC v-else />
  </div>
</template>

<script setup>
import RubberBudgets_MOB from "./RUBBER-Budgets/RubberBudgets_MOB.vue";
import RubberBudgets_PC from "./RUBBER-Budgets/RubberBudgets_PC.vue";

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
