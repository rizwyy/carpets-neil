<template>
  <!-- MOBILE -->
  <section class="h-max w-max min-[990px]:hidden">
    <NavBarMOB />
    <SearchBarMOB />
    <BannerYouWin />

    <FlooringLayoutMOB />
    <FooterMOB />
  </section>
  <!-- DESKTOP -->
  <section class="h-max w-max max-[990px]:hidden">
    <NavBarPC />
    <BannerYouWin />
    <!-- <HowWoltizWorks /> -->
    <!-- <FlooringLayout /> -->
    <FooterPC />
  </section>
</template>

<script setup>
import FlooringLayoutMOB from "../../components/MOBILE/FLOORING/FlooringLayoutMOB.vue";
// import FlooringLayout from "~/components/DESKTOP/FLOORING/FlooringLayout.vue";
import NavBarMOB from "../../components/MOBILE/NavBarMOB.vue";
import SearchBarMOB from "../../components/SearchBar/SearchBarMOB.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import BannerYouWin from "./../../components/BannerYouWin.vue";

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import FooterPC from "~/components/DESKTOP/FooterPC.vue";

// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");
</script>

<style lang="scss" scoped></style>
