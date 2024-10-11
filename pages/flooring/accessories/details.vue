<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

// Eager-loaded component (for both mobile and desktop)
import AccessoriesTypesDetails from "../../../components/MOBILE/FLOORING/ACCESSORIES/AccessoriesTypesDetails.vue";

// Lazy-loaded components

const LazyMatBaseDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/ACCESSORIES/MatBaseDetails.vue")
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
    <ul
      v-auto-animate
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
          Accessories
          <!-- DESKTOP -->
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <AccessoriesTypesDetails />
      <LazyOrderMethod
        v-show="
          userStore.preference.spec_4.includes('Mat Floors') &&
          userStore.preference.spec_2 !== ''
        "
        flooring="accessories"
      />
      <LazyInfoForm flooring="accessories" />
      <LazyReviewCard flooring="accessories" link="accessories" />
    </ul>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max">
    <!-- <FloatingBarMOB flooring="accessories" link="/" /> -->
    <ul
      v-auto-animate
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[.5rem] flex flex-col gap-[.5rem] items-center z-[2]"
    >
      <NavBarMOB />
      <div
        class="h-max px-[4vw] pt-[1.4vh] pb-[.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- MOBILE -->
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[2.4vh] underline underline-offset-[.8vh] text-[#666] flex"
          >
            Accessories
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin :existingUser="existingUser" />
      <AccessoriesTypesDetails :existingUser="existingUser" />
      <LazyMatBaseDetails />

      <LazyOrderMethod flooring="accessories" />
      <LazyInfoForm flooring="accessories" />
      <LazyReviewCard flooring="accessories" link="accessories" />
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
