<template>
  <!-- MOBILE -->
  <section v-if="isMobile" class="h-max w-max min-[990px]:hidden">
    <NavBarMOB />
    <SearchBarMOB />
    <BannerYouWin />

    <FlooringLayoutMOB />
    <FooterMOB />
  </section>
  <!-- DESKTOP -->

  <section
    v-else
    class="min-[1590px]:h-max min-[1590px]:w-screen min-[1590px]:max-w-[99vw] h-max max-w-screen overflow-x-hidden max-[990px]:hidden font-outfit"
  >
    <NavBarPC />

    <div
      class="min-[1590px]:w-full min-[1590px]:flex min-[1590px]:items-center min-[1590px]:flex-col"
    >
      <div class="min-[1590px]:w-[75%]">
        <BannerYouWin />
        <FlooringLayoutPC />
        <WhyWoltizPC />

        <div
          class="h-max w-full pb-[12vh] pt-[8vh] flex flex-col items-center gap-[8vh]"
        >
          <h2 class="text-[2.4vw]">Newsletter</h2>
          <SignUpCardPC />
        </div>
        <div
          class="h-max w-[80] pb-[12vh] pt-[8vh] flex flex-col items-center gap-[8vh] border-t-[.2vh]"
        >
          <h2 class="text-[2.4vw]">Privileges</h2>
          <DesignerApnaBannerPC />
        </div>
        <FaqPC />
      </div>
    </div>
    <FooterPC />
  </section>
</template>

<script setup>
import FlooringLayoutMOB from "~/components/MOBILE/FLOORING/FlooringLayoutMOB.vue";
import FaqPC from "./../../components/DESKTOP/FaqPC.vue";
import WhyWoltizPC from "./../../components/DESKTOP/WhyWoltizPC.vue";
import FlooringLayoutPC from "~/components/DESKTOP/FlooringLayoutPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import SearchBarMOB from "~/components/SearchBar/SearchBarMOB.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import BannerYouWin from "./~/components/BannerYouWin.vue";
import SignUpCardPC from "~/components/DESKTOP/SignUpCardPC.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import FooterPC from "~/components/DESKTOP/FooterPC.vue";
import DesignerApnaBannerPC from "~/components/DESKTOP/DesignerApnaBannerPC.vue";

// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
