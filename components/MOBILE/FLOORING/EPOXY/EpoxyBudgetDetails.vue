<template>
  <div class="">
    <EpoxyBudgets_MOB v-if="isMobile" />
    <EpoxyBudgets_PC v-else />
  </div>
</template>

<script setup>
import EpoxyBudgets_MOB from "./EPOXY-Budgets/EpoxyBudgets_MOB.vue";
import EpoxyBudgets_PC from "./EPOXY-Budgets/EpoxyBudgets_PC.vue";

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
