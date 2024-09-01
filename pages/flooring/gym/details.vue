<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

// Eager-loaded component (for both mobile and desktop)
import GymApplicationDetails from "../../../components/MOBILE/FLOORING/GYM/GymApplicationDetails.vue";

// Lazy-loaded components
const LazyGymActivitiesDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/GYM/GymActivitiesDetails.vue")
);
const LazyGymFlooringDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/GYM/GymFlooringDetails.vue")
);
const LazyGymColorDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/GYM/GymColorDetails.vue")
);
const LazyGymBudgetDetails = defineAsyncComponent(() =>
  import("~/components/MOBILE/FLOORING/GYM/GymBudgetDetails.vue")
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
          Gym Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <GymApplicationDetails />
      <LazyGymActivitiesDetails />
      <LazyGymFlooringDetails />
      <LazyGymColorDetails />
      <LazyGymBudgetDetails />
      <LazyOrderMethod flooring="gym" />
      <LazyInfoForm flooring="gym" />
      <LazyReviewCard flooring="gym" link="gym" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max">
    <NavBarMOB />
    <FloatingBarMOB flooring="GYM FLOORS" link="/" />
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
            Gym Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <GymApplicationDetails :existingUser="existingUser" />
      <LazyGymActivitiesDetails :existingUser="existingUser" />
      <LazyGymFlooringDetails :existingUser="existingUser" />
      <LazyGymColorDetails :existingUser="existingUser" />
      <LazyGymBudgetDetails :existingUser="existingUser" />
      <LazyOrderMethod flooring="gym" />
      <LazyInfoForm flooring="gym" />
      <LazyReviewCard flooring="gym" link="gym" />
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
</style>
