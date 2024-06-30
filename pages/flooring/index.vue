<template>
  <Mobile>
    <NavBarMOB />
    <SearchBarMOB />
    <FlooringLayoutMOB />
  </Mobile>
  <Desktop> </Desktop>
</template>

<script setup>
import Desktop from "./../../layouts/Desktop.vue";
import Mobile from "./../../layouts/Mobile.vue";
import FlooringLayoutMOB from "../../components/MOBILE/FLOORING/FlooringLayoutMOB.vue";
import NavBarMOB from "../../components/MOBILE/NavBarMOB.vue";
import SearchBarMOB from "./../../components/MOBILE/SearchBarMOB.vue";

// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");
</script>

<style lang="scss" scoped></style>
