<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

// Eager-loaded component (for both mobile and desktop)
import SportsTypesDetails from "../../../components/MOBILE/FLOORING/SPORTS/SportsTypesDetails.vue";

// Lazy-loaded components
const LazySportsFlooringDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/SPORTS/SportsFlooringDetails.vue")
);
const LazySportsColorDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/SPORTS/SportsColorDetails.vue")
);
const LazySportsBudgetDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/SPORTS/SportsBudgetDetails.vue")
);
const LazyOrderMethod = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/OrderMethod.vue")
);
const LazyInfoForm = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/InfoForm.vue")
);
const LazyReviewCard = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/DetailsReview.vue")
);

const isMobile = ref(false);
const existingUser = ref(false);

onMounted(() => {
  userStore.updateCookie();
  const userPreferenceCookie = useCookie("userPreference").value;
  if (
    userPreferenceCookie &&
    typeof toRaw(userPreferenceCookie).name === "string"
  ) {
    existingUser.value = true;
  }

  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<template>
  <!-- DESKTOP -->
  <section v-if="!isMobile" class="max-[990px]:hidden max-w-screen h-max">
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
          class="text-[2.6vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Sports Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <SportsTypesDetails />
      <LazySportsFlooringDetails />
      <LazySportsColorDetails />
      <LazySportsBudgetDetails />
      <LazyOrderMethod flooring="sports" />
      <LazyInfoForm flooring="sports" />
      <LazyReviewCard flooring="sports" link="sports" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max">
    <NavBarMOB />
    <FloatingBarMOB flooring="SPORTS" link="/" />

    <div
      class="h-max w-screen font-outfit flex flex-col gap-[1vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[1.4vh] pb-[.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- MOBILE -->
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[2.4vh] underline underline-offset-[.8vh] text-[#666] flex"
          >
            Sports Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin :existingUser="existingUser" />
      <SportsTypesDetails :existingUser="existingUser" />
      <LazySportsFlooringDetails :existingUser="existingUser" />
      <LazySportsColorDetails :existingUser="existingUser" />
      <LazySportsBudgetDetails :existingUser="existingUser" />
      <LazyOrderMethod flooring="sports" />
      <LazyInfoForm flooring="sports" />
      <LazyReviewCard flooring="sports" link="sports" />
    </div>
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
