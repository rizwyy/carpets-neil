<template>
  <RaisedBudget_MOB v-if="isMobile" />
  <RaisedBudget_PC v-else />
</template>

<script setup>
import RaisedBudget_MOB from "./RAISED-Budgets/RaisedBudget_MOB.vue";
import RaisedBudget_PC from "./RAISED-Budgets/RaisedBudget_PC.vue";

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
