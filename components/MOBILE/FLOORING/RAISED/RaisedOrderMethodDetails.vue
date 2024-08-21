<template>
  <div class="h-max w-max">
    <RaisedOrderMethodsMOB v-if="isMobile" />
    <RaisedOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import RaisedOrderMethodsMOB from "./Raised-OrderMethods/RaisedOrderMethods_MOB.vue";
import RaisedOrderMethodsPC from "./Raised-OrderMethods/RaisedOrderMethods_PC.vue";
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
