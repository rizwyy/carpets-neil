<template>
  <section class="h-max max-w-screen overflow-x-hidden">
    <NavBarMOB />
    <NavBarPC />
    <div>
      <UnderDev />
    </div>
  </section>
</template>

<script setup>
import NavBarMOB from "./../components/MOBILE/NavBarMOB.vue";
import NavBarPC from "./../components/DESKTOP/NavBarPC.vue";
import UnderDev from "./../components/MOBILE/UnderDev.vue";
</script>

<style lang="scss" scoped></style>
