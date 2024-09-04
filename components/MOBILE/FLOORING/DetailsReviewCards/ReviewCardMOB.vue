<template>
  <!-- Render only if the form is validated -->
  <div v-if="userStore.isFormValidated" class="h-max w-max">
    <div
      v-if="isFlooringVisible"
      class="h-screen w-screen bg-[#fff3] backdrop-blur-[8px] fixed top-0 left-0 z-[9999]"
    >
      <div
        class="h-[100svh] w-screen gap-[2vh] bg-inherit flex flex-col items-center justify-start gap-[8vh]"
      >
        <div
          class="h-max w-full flex justify-between items-center px-[7.6vw] pt-[6vh]"
        >
          <span class="text-[3.8vh] text-[#333] font-[400]"
            >Flooring Options</span
          >
          <span
            @click="handleCancelAddMoreFlooring"
            class="flex items-center text-[3.8vh] text-[#222]"
          >
            <ClearAllIcon />
          </span>
        </div>
        <FlooringGridOverlayMOB />
      </div>
    </div>

    <!-- Render Preferences only if all conditions are met -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full px-[4.2vw] text-detailsContainer_heading_MOB"
    >
      <span>{{ firstName }}'s Preferences:</span>
    </div>

    <!-- Transition and Preference Cards -->
    <transition @beforeEnter="handleDetailsDOMEntry('revCard')">
      <div
        v-if="arePreferencesFilled"
        class="h-max w-screen flex flex-col justify-center items-center gap-[4vh] py-[2vh]"
      >
        <div v-if="userStore.cart.length > 0" class="w-full h-max">
          <div v-for="(item, index) in userStore.cart" :key="index">
            <ReusablePrefCardMOB :item="item" :key="index" />
          </div>
        </div>
        <div
          v-else
          class="text-center py-[2vh] flex flex-col gap-[3.2vh] items-center"
        >
          <span>No saved preferences found :(</span>
        </div>
      </div>
    </transition>

    <!-- Refresh Button -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex justify-evenly pb-[2vh]"
    >
      <button
        v-if="!isRefreshLoading"
        @click="getHistory"
        class="h-max w-max text-[#555] rounded-full"
      >
        <div class="h-max w-max flex items-center gap-[1vw] text-[2.8vh]">
          <span class="text-[2vh]">Refresh</span>
          <RefreshIcon />
        </div>
      </button>
      <div v-else class="text-[3.2vh] px-[4vw]">
        <LoadingIcon2 />
      </div>
    </div>

    <!-- Add More and Confirm Buttons -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex flex-col items-center py-[8vh] border-t-[2px] border-dotted border-[#999] gap-[4vh]"
    >
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleAddMore"
        class="border-[2px] rounded-md w-[90%] py-[2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center"
      >
        <span v-if="!isAddMoreLoading">BROWSE OTHER PRODUCTS</span>
        <LoadingIcon class="text-[4.2vh]" v-else />
      </button>
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleOrderConfirmation"
        class="border-[2px] rounded-md w-[90%] py-[2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center"
      >
        <span v-if="!isConfirmationLoading">CONFIRM</span>
        <LoadingIcon class="text-[4.2vh]" v-else />
      </button>
    </div>

    <!-- Footer -->
    <div class="h-max w-full">
      <!-- <FooterMOB /> -->
    </div>
  </div>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import { useRouter } from "vue-router";
import ReusablePrefCardMOB from "./ReusablePrefCardMOB.vue";
import LoadingIcon from "~/public/icons/loadingIcon.vue";
import RefreshIcon from "~/public/icons/refreshIcon.vue";
import LoadingIcon2 from "~/public/icons/loadingIcon2.vue";
import FooterMOB from "../../FooterMOB.vue";
import FlooringGridMOB from "../FLOORING-ITEMS/FlooringGridMOB.vue";
import FlooringGridOverlayMOB from "../FLOORING-ITEMS/FlooringGridOverlayMOB.vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const userPreference = useCookie("userPreference");
const isAddMoreLoading = ref(false);
const isConfirmationLoading = ref(false);
const isRefreshLoading = ref(false);
const historyFound = ref(true);
const isFlooringVisible = ref(false);

// Props
const { flooring, link } = defineProps(["flooring", "link"]);

// Computed for first name extraction
const firstName = computed(() => {
  if (!userStore.userData.name) return "";
  const name = userStore.userData.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

// Computed for repeated condition
const arePreferencesFilled = computed(() => {
  return (
    userStore.preference.flooring === `${flooring}` &&
    userStore.preference.spec_1 !== "" &&
    Array.isArray(userStore.preference.color) &&
    userStore.preference.color.length > 0 && // Ensure color is an array
    userStore.preference.budget !== "" &&
    userStore.preference.orderMethod !== "" &&
    userStore.userData.name !== "" &&
    userStore.isFormValidated
  );
});

// Fetch preferences history
async function getHistory() {
  isRefreshLoading.value = true;

  try {
    let sanitizedPhone = userStore.userData.phone.startsWith("+")
      ? userStore.userData.phone.slice(1)
      : addCountryCode(
          userStore.userData.phone,
          userStore.preference.country
        ).slice(1);

    const preferences = await fetchPreferencesByMobile(sanitizedPhone);

    if (preferences && preferences.data && preferences.data.length > 0) {
      preferences.data.forEach((pref) => {
        const preferenceData = pref.preference;
        const id = pref.id;

        const isAlreadyInCart = userStore.cart.some((item) => item.id === id);

        if (!isAlreadyInCart) {
          const preferenceWithId = { ...preferenceData, id: id };
          userStore.cart.push(preferenceWithId);
        }
      });

      console.log("Preferences added to cart:", userStore.cart);
    } else {
      console.log("No preferences found.");
    }
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error);
  } finally {
    setTimeout(() => {
      isRefreshLoading.value = false;
    }, 1000);
  }
}

// Other actions and handlers
const HandleOrderConfirmation = () => {
  isConfirmationLoading.value = true;

  // Step 1: Set the cookie and validate
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");
    })
    .then(async () => {
      // Step 2: Iterate over each cart item and insert them individually
      for (const item of userStore.cart) {
        // Ensure the isOrderConfirmed property is set to true
        item.isOrderConfirmed = true;

        // Prepare the user data object for each item
        const userData = {
          name: userStore.userData.name,
          phone: userStore.userData.phone,
          email: userStore.userData.email,
          preference: item, // Include the current cart item as preference
          isOrderConfirmed: true,
        };

        const response = await fetch("/api/insert-logs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`Error inserting log for item: ${item}`);
        }

        const logData = await response.json();
        console.log("Log data for item:", logData);
      }
    })
    .then(() => {
      // Step 3: Clear user data and cart after successful insertion
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";
      userStore.cart = []; // Clear the cart

      userPreference.value = null;
      restrictedAccess.value = false;

      isConfirmationLoading.value = false;
      router.push(`/flooring/${link}/success`);
      console.log("SUCCESS");
    })
    .catch((err) => {
      isConfirmationLoading.value = false;
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

const HandleAddMore = () => {
  isAddMoreLoading.value = true;
  setTimeout(() => {
    isFlooringVisible.value = true;
    DISABLE_SCROLL();
    isAddMoreLoading.value = false;
  }, 2000);
};

const handleCancelAddMoreFlooring = () => {
  isFlooringVisible.value = false;
  ENABLE_SCROLL();
};

watch(
  () => userStore.userData.name,
  async (newValue) => {
    if (newValue !== "") {
      await getHistory();
    }
  }
);
</script>

<style lang="scss" scoped></style>
