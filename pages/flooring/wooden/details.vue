<script setup>
import WoodenCategoryDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenCategoryDetails.vue";
import WoodenTypeDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenTypeDetails.vue";
import WoodenFinishDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenFinishDetails.vue";
import WoodenColorDetails from "~/components/MOBILE/FLOORING/WOODEN/WoodenColorDetails.vue";
import WoodenDesignDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenDesignDetails.vue";
import WoodenBudgetDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenBudgetDetails.vue";
import CustomBTN from "./../../../components/MOBILE/CustomBTN.vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

const isCategoryOpted = ref(false);
const category = ref("");
function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

onMounted(() => {});
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
          class="text-[2.6vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Wooden Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.category }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <WoodenCategoryDetails />
      <CustomBTN heading="Wooden Flooring" link="/flooring/customize" />
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />

      <!-- DESKTOP -->
      <a href="/flooring/wooden/catalog">
        <button
          @click="setUserPreferenceCookie"
          v-show="
            userStore.preference.type.length > 0 &&
            userStore.preference.color.length > 0 &&
            userStore.preference.material !== '' &&
            userStore.preference.budget !== ''
          "
          class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-gradient-to-br from-[#444] via-[#000] to-[#999] to-[90%] right-[2vw] z-[999] text-white px-[4vw] py-[4vh] text-[4vh] hover:from-[#444] hover:to-[#111] ease-in-out flex items-center gap-[2vw] justify-center"
        >
          BROWSE CATALOG
        </button>
      </a>
      <!-- DESKTOP -->
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->

  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section class="min-[990px]:hidden w-max h-max">
    <NavBarMOB />
    <div
      class="h-max w-screen font-outfit flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[3.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh] ]"
      >
        <!-- MOBILE -->
        <a
          href="/flooring"
          class="text-[2.4vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Wooden Flooring >
          {{ userStore.preference.category }}
        </a>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <WoodenCategoryDetails />
      <CustomBTN heading="Custom Wooden Floors" link="/flooring/customize" />
      <!-- MOBILE -->
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />
      <!-- <PileDetails /> -->
      <a href="/flooring/wooden/catalog">
        <button
          @click="setUserPreferenceCookie"
          v-show="
            userStore.preference.type.length > 0 &&
            userStore.preference.color.length > 0 &&
            userStore.preference.material !== '' &&
            userStore.preference.budget !== ''
          "
          class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-slate-900 right-[2vw] z-[999] text-white px-[4vw] py-[4vh] flex items-center gap-[2vw] justify-center"
        >
          <!-- MOBILE -->
          BROWSE CATALOG<svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.525 18.025q-.5.325-1.012.038T11 17.175V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.475.3.475.85t-.475.85z"
            />
          </svg>
          <!-- MOBILE -->
        </button>
      </a>
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
