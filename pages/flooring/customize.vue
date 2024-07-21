<template>
  <div class="max-[990px]:hidden">
    <NavBarPC />
    <BannerYouWin />
    <SlidableNav />
    <UploadContainer />
    <WoltizWorkFlow />
    <FaqPC />

    <FooterPC />
  </div>

  <div class="min-[990px]:hidden">
    <NavBarMOB />
    <SlidableNav />
    <BannerYouWin />
    <UploadContainer />
    <WoltizWorkFlow />
    <FaqMOB />
    <FooterMOB />
  </div>
</template>

<script setup>
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "../../components/MOBILE/NavBarMOB.vue";
import FaqMOB from "~/components/MOBILE/FaqMOB.vue";
import FaqPC from "~/components/DESKTOP/FaqPC.vue";
import BannerYouWin from "~/components/BannerYouWin.vue";
import FooterPC from "~/components/DESKTOP/FooterPC.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import SlidableNav from "~/components/MOBILE/FLOORING/CUSTOM/SlidableNav.vue";
import UploadContainer from "~/components/MOBILE/FLOORING/CUSTOM/UploadContainer.vue";
import WoltizWorkFlow from "~/components/MOBILE/FLOORING/CUSTOM/WoltizWorkFlow.vue";
</script>
