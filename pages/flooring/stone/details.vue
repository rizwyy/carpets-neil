<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

// Eager-loaded component (for both mobile and desktop)
import StoneFormatDetails from "../../../components/MOBILE/FLOORING/STONE/StoneFormatDetails.vue";

// Lazy-loaded components
const LazyStoneMaterialDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/STONE/StoneMaterialDetails.vue")
);
const LazyStoneEffectDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/STONE/StoneEffectDetails.vue")
);

const LazyStoneColorDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/STONE/StoneColorDetails.vue")
);
const LazyStoneShadeDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/STONE/StoneShadeDetails.vue")
);
const LazyStoneBudgetDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/STONE/StoneBudgetDetails.vue")
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
    <ul
      v-auto-animate
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[2vh] flex flex-col gap-[6vh] items-center"
    >
      <NavBarPC />

      <div
        class="h-max px-[6vw] pt-[4vh] pb-[0vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- DESKTOP -->
        <a
          href="/flooring"
          class="text-[2.6vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Stone Flooring
          <!-- DESKTOP -->
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <StoneFormatDetails />
      <LazyStoneMaterialDetails />
      <LazyStoneEffectDetails />
      <LazyStoneColorDetails />
      <LazyStoneShadeDetails />
      <LazyStoneBudgetDetails />
      <LazyOrderMethod flooring="stone" />
      <LazyInfoForm flooring="stone" />
      <LazyReviewCard flooring="stone" link="stone" />
    </ul>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max">
    <!-- <FloatingBarMOB flooring="Stone" link="/" /> -->

    <ul
      v-auto-animate
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[.5rem] flex flex-col gap-[.5rem] items-center z-[2]"
    >
      <NavBarMOB />

      <div
        class="h-max px-[4vw] pt-[.7rem] pb-[.2rem] w-full flex flex-col items-start text-[1.6rem] gap-[1rem]"
      >
        <!-- MOBILE -->
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[1rem] underline underline-offset-[.4rem] text-[#666] flex"
          >
            Stone Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[1.6rem]"> Specify Your Needs </span>
      </div>
      <BannerYouWin :existingUser="existingUser" />
      <StoneFormatDetails />
      <LazyStoneMaterialDetails />
      <LazyStoneEffectDetails />
      <LazyStoneColorDetails />
      <LazyStoneShadeDetails />
      <LazyStoneBudgetDetails />
      <LazyOrderMethod flooring="stone" />
      <LazyInfoForm flooring="stone" />
      <LazyReviewCard flooring="stone" link="stone" />
    </ul>
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
