<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";
import ScrollToTopBTNPC from "~/components/DESKTOP/ScrollToTopBTN-PC.vue";

// Eager-loaded component (for both mobile and desktop)
import PvcCategoryDetails from "../../../components/MOBILE/FLOORING/PVC/PvcCategoryDetails.vue";

// Lazy-loaded components
const LazyPvcTypeDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/PVC/PvcTypeDetails.vue")
);
const LazyPvcFinishDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/PVC/PvcFinishDetails.vue")
);
const LazyPvcColorDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/PVC/PvcColorDetails.vue")
);
const LazyPvcDesignDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/PVC/PvcDesignDetails.vue")
);
const LazyPvcBudgetDetails = defineAsyncComponent(() =>
  import("../../../components/MOBILE/FLOORING/PVC/PvcBudgetDetails.vue")
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
  <section
    v-if="!isMobile"
    class="max-[990px]:hidden max-w-screen h-max select-none"
  >
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
          class="text-[2.6vh] underline underline-offset-[.8vh] text-[#666] flex"
        >
          PVC Flooring
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <ScrollToTopBTNPC />

      <!-- DESKTOP -->
      <PvcCategoryDetails :existingUser="existingUser" />
      <LazyPvcTypeDetails :existingUser="existingUser" />
      <LazyPvcDesignDetails :existingUser="existingUser" />
      <LazyPvcColorDetails :existingUser="existingUser" />
      <LazyPvcFinishDetails :existingUser="existingUser" />
      <LazyPvcBudgetDetails :existingUser="existingUser" />
      <LazyOrderMethod flooring="PVC" />
      <LazyInfoForm flooring="PVC" />
      <LazyReviewCard flooring="PVC" link="pvc" />
    </ul>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->

  <!-- MOBILE -->
  <section v-else class="min-[990px]:hidden w-max h-max select-none">
    <FloatingBarMOB flooring="VINYL" link="/" />
    <ul
      v-auto-animate
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[1vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <NavBarMOB />

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

      <LazyPvcTypeDetails />
      <LazyPvcDesignDetails />
      <LazyPvcColorDetails />
      <LazyPvcFinishDetails />
      <LazyPvcBudgetDetails />
      <LazyOrderMethod flooring="PVC" />
      <LazyInfoForm flooring="PVC" />
      <LazyReviewCard flooring="PVC" link="pvc" />
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
