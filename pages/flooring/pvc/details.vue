<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import PvcCategoryDetails from "../../../components/MOBILE/FLOORING/PVC/PvcCategoryDetails.vue";
import PvcTypeDetails from "../../../components/MOBILE/FLOORING/PVC/PvcTypeDetails.vue";
import PvcFinishDetails from "../../../components/MOBILE/FLOORING/PVC/PvcFinishDetails.vue";
import PvcColorDetails from "./../../../components/MOBILE/FLOORING/PVC/PvcColorDetails.vue";
import PvcDesignDetails from "../../../components/MOBILE/FLOORING/PVC/PvcDesignDetails.vue";
import PvcBudgetDetails from "../../../components/MOBILE/FLOORING/PVC/PvcBudgetDetails.vue";

import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";

import OrderMethod from "../../../components/MOBILE/FLOORING/OrderMethod.vue";
import ReviewCard from "../../../components/MOBILE/FLOORING/DetailsReview.vue";
import InfoForm from "../../../components/MOBILE/FLOORING/InfoForm.vue";

import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import ScrollToTopBTNPC from "~/components/DESKTOP/ScrollToTopBTN-PC.vue";

const isMobile = ref(false);
onMounted(() => {
  handleDOMEntry("detail_pvc_mob_text_item");
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>
<template>
  <!-- DESKTOP -->
  <section
    v-if="!isMobile"
    class="max-[990px]:hidden max-w-screen h-max select-none"
  >
    <NavBarPC />
    <div
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[2vh] flex flex-col gap-[6vh] items-center"
    >
      <div
        class="h-max px-[6vw] pt-[4vh] pb-[0vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- DESKTOP -->
        <a
          href="/flooring"
          class="detail_pvc_mob_text_item text-[2.6vh] underline underline-offset-[.8vh] text-[#666] flex"
        >
          PVC Flooring
        </a>
        <span class="detail_pvc_mob_text_item text-[5.4vh]">
          Specify Your Needs
        </span>
      </div>
      <ScrollToTopBTNPC />

      <!-- DESKTOP -->
      <PvcCategoryDetails />
      <PvcTypeDetails />
      <PvcDesignDetails />
      <PvcColorDetails />
      <PvcFinishDetails />
      <PvcBudgetDetails />
      <PvcOrderMethodDetails />
      <OrderMethod flooring="PVC" />
      <InfoForm flooring="PVC" />
      <ReviewCard flooring="PVC" link="pvc" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->

  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max select-none">
    <NavBarMOB />
    <FloatingBarMOB flooring="VINYL" link="/" />

    <div
      class="h-max w-screen font-outfit flex flex-col gap-[1vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[1.4vh] pb-[.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[2.4vh] underline underline-offset-[.6vh] text-[#666] flex"
          >
            PVC Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <!-- MOBILE -->
      <PvcCategoryDetails />
      <PvcTypeDetails />

      <PvcDesignDetails />
      <PvcColorDetails />
      <PvcFinishDetails />
      <PvcBudgetDetails />
      <PvcOrderMethodDetails />
      <OrderMethod flooring="PVC" />
      <InfoForm flooring="PVC" />
      <ReviewCard flooring="PVC" link="pvc" />
    </div>
    <!-- MOBILE -->
  </section>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 4s ease-in-out infinite;
  -moz-animation: animatedgradient 4s ease-in-out infinite;
  animation: animatedgradient 4s ease-in-out infinite normal;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
