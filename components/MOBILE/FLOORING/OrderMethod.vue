<template>
  <OrdersCardMOB :flooring="flooring" v-if="isMobile" />
  <OrdersCardPC :flooring="flooring" v-else />
</template>

<script setup>
const { flooring } = defineProps(["flooring"]);

import OrdersCardMOB from "./OrderMethodCards/OrdersCardMOB.vue";
import OrdersCardPC from "./OrderMethodCards/OrdersCardPC.vue";

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
