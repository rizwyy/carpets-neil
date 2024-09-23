<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

// Eager-loaded component (for both mobile and desktop)
import RaisedAreaDetails from "~/components/MOBILE/FLOORING/RAISED/RaisedAreaDetails.vue";

// Lazy-loaded components
const LazyRaisedApplicationDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/RAISED/RaisedApplicationDetails.vue")
);
const LazyRaisedPanelDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/RAISED/RaisedPanelsDetails.vue")
);
const LazyRaisedFinishesDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/RAISED/RaisedFinishesDetails.vue")
);
const LazyRaisedColorDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/RAISED/RaisedColorDetails.vue")
);
const LazyRaisedBudgetDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/RAISED/RaisedBudgetDetails.vue")
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
  <section class="max-[990px]:hidden max-w-screen h-max">
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
          class="text-[2.6vh] underline underline-offset-[.2rem] text-[#666] flex"
        >
          Raised Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <RaisedAreaDetails />
      <LazyRaisedApplicationDetails />
      <LazyRaisedPanelDetails />
      <LazyRaisedFinishesDetails />
      <LazyRaisedColorDetails />
      <LazyRaisedBudgetDetails />
      <LazyOrderMethod flooring="raised" />
      <LazyInfoForm flooring="raised" />
      <LazyReviewCard flooring="raised" link="raised" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->

  <!-- MOBILE -->
  <section class="min-[990px]:hidden w-max h-max">
    <FloatingBarMOB flooring="RAISED FLOORS" link="/" />

    <ul
      v-auto-animate
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[.5rem] flex flex-col gap-[.5rem] items-center z-[2]"
    >
      <NavBarMOB />
      <div
        class="h-max px-[4vw] pt-[.7rem] pb-[.2rem] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- MOBILE -->
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[1.2rem] underline underline-offset-[.4rem] text-[#666] flex"
          >
            Raised Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[1.8rem]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <RaisedAreaDetails :existingUser="existingUser" />
      <LazyRaisedApplicationDetails :existingUser="existingUser" />
      <LazyRaisedPanelDetails :existingUser="existingUser" />
      <LazyRaisedFinishesDetails :existingUser="existingUser" />
      <LazyRaisedColorDetails :existingUser="existingUser" />
      <LazyRaisedBudgetDetails :existingUser="existingUser" />
      <LazyOrderMethod flooring="raised" />
      <LazyInfoForm flooring="raised" />
      <LazyReviewCard flooring="raised" link="raised" />
    </ul>
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
