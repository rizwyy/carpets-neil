<template>
  <div class="max-[990px]:hidden">
    <NavBarPC />
    <BannerYouWin />
    <SlidableNav />
  </div>

  <div class="min-[990px]:hidden">
    <NavBarMOB />
    <BannerYouWin />
    <SlidableNav />
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
import BannerYouWin from "~/components/BannerYouWin.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import SlidableNav from "~/components/MOBILE/FLOORING/Customise/SlidableNav.vue";
import UploadContainer from "~/components/MOBILE/FLOORING/Customise/UploadContainer.vue";
import WoltizWorkFlow from "~/components/MOBILE/FLOORING/Customise/WoltizWorkFlow.vue";
</script>
