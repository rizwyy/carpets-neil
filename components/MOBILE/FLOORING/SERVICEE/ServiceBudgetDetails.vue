<template>
  <div class="">
    <ServiceBudgets_MOB v-if="isMobile" />
    <ServiceBudgets_PC v-else />
  </div>
</template>

<script setup>
import ServiceBudgets_MOB from "./SERVICE-Budgets/ServiceBudgets_MOB.vue";
import ServiceBudgets_PC from "./SERVICE-Budgets/ServiceBudgets_PC.vue";

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
