<template>
  <div class="h-[90vh] relative w-screen overflow-hidden">
    <div v-if="isAccessRestricted" class="h-screen w-screen">
      <Unavailable />
    </div>
    <CheckoutFormMOB v-else />
  </div>
</template>

<script setup>
import CheckoutFormMOB from "~/components/MOBILE/FLOORING/CheckoutFormMOB.vue";
import Unavailable from "~/components/MOBILE/Unavailable.vue";
const restrictedAccess = useCookie("restrictedAccess");

const isAccessRestricted = ref(true);

onMounted(() => {
  if (restrictedAccess.value || typeof restrictedAccess.value === "undefined") {
    isAccessRestricted.value = true;
  } else {
    isAccessRestricted.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
