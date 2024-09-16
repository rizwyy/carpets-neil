<template>
  <div v-if="isMobile" class="min-[990px]:hidden">
    <NavBarMOB />
    <SlidableNavMOB />
    <BannerYouWin />
    <div class="h-max w-full py-[4vh]">
      <UploadContainerMOB />
    </div>
    <WoltizWorkFlowMOB />
    <FaqMOB />
    <FooterMOB />
  </div>
  <div v-else class="max-[990px]:hidden">
    <NavBarPC />
    <BannerYouWin />
    <SlidableNavPC />
    <UploadContainerPC />
    <WoltizWorkFlow />
    <FaqPC />

    <FooterPC />
  </div>
</template>

<script setup>
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "../../components/MOBILE/NavBarMOB.vue";
import FaqPC from "~/components/DESKTOP/FaqPC.vue";
import BannerYouWin from "~/components/BannerYouWin.vue";
import FooterPC from "~/components/DESKTOP/FooterPC.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import SlidableNavPC from "~/components/MOBILE/FLOORING/CUSTOM/SlidableNavPC.vue";
import SlidableNavMOB from "~/components/MOBILE/FLOORING/CUSTOM/SlidableNavMOB.vue";
import UploadContainerMOB from "~/components/MOBILE/FLOORING/CUSTOM/UploadContainerMOB.vue";
import UploadContainerPC from "~/components/MOBILE/FLOORING/CUSTOM/UploadContainerPC.vue";
import WoltizWorkFlow from "~/components/MOBILE/FLOORING/CUSTOM/WoltizWorkFlow.vue";
import FaqMOB from "~/components/MOBILE/FLOORING/FaqMOB.vue";
import WoltizWorkFlowMOB from "~/components/MOBILE/FLOORING/CUSTOM/WoltizWorkFlowMOB.vue";

const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>
<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
